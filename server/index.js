// Modules
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Routes
var middleware = require('./middleware');
var config = require('./config');
var auth = require('./auth');

// DB
var Apps = require('./db.js').App;
mongoose.connect('mongodb://test:test@ds151127.mlab.com:51127/sct');
app.use(express.static('public'));

// Token
app.set('secret', config.TOKEN_SECRET);

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/auth/signup', auth.signup);
app.use('/api/authenticate', auth.login);

io.on('connection', (socket) => {
    console.log('new conection stablished');
    Apps.find({}, (err, apps) => {
        socket.emit('apps', apps);
    });
});

app.get('/api/apps',  (req, res) => {
    Apps.find({}, (err, app) => {
        res.send(JSON.stringify(app));
    });
});

app.post('/api/apps', middleware.ensureAuthenticated, (req, res) => {
    var name = req.body.name, img = req.body.img;
        var nuevaAPP = new Apps({ name: name, img: img });
        nuevaAPP.save((err) => {
            if (err) console.log(err);
        });
        res.sendStatus(200);
});

app.put('/api/apps/:id', middleware.ensureAuthenticated, (req, res) => {
    var id = req.params.id, name = req.body.name, img = req.body.img;
    Apps.findOneAndUpdate({ _id: id }, { $set: { name: name, img: img } }, {new: true}, (err, app) => {
        res.send(JSON.stringify(app));
    });
});

app.delete('/api/apps/:id', middleware.ensureAuthenticated, (req, res) => {
    var id = req.params.id;
    Apps.remove({ _id: id }, (err, app) => {
        res.send(JSON.stringify(app));
    });
});

server.listen(8080, () => {
    console.log('server running at port: 8080');
});