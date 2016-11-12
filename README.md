# sct
This is a rest api service for creating Applications.

Instructions:
* Getting all applications: http://localhost:8080/ 
* Sign UP: http://localhost:8080/auth/signup/ METHOD: POST ARGS [ USERNAME, PASSWORD ] RESPONSE [ SUCCESS, TOKEN ] 
* Login: http://localhost:8080/api/authenticate METHOD: POST ARGS [ USERNAME, PASSWORD ] RESPONSE [ SUCCESS, TOKEN ] 
* List Apps: https://localhost:8080/api/apps METHOD: GET 
* Create App: https://localhost:8080/api/apps METHOD: POST ARGS [ IMG, NAME ] HEADERS  [ Authorization: 'Bearer: Token] RESPONSE [ APP ] 
* Update App: https://localhost:8080/api/apps/{pk} METHOD: PUT ARGS [ IMG, NAME ] HEADERS  [ Authorization: 'Bearer: Token] RESPONSE [ APP ] 
* Delete App: https://localhost:8080/api/apps/{pk} METHOD: DELETE HEADERS  [ Authorization: 'Bearer: Token] 
