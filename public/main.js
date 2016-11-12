var socket = io.connect('http://localhost:8080', {'forceNew': true})

socket.on('apps', (data)=>{
    render(data);
});

function render(data){
    var html = data.map((elem, index)=>{
        return("<div><strong>"+elem.name+"</strong>: "+elem.image+"</div>");
    }).join(" ");

    document.getElementById('applications').innerHTML = html;
}