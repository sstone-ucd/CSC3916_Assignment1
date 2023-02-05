//add the express and body parser modules
var express = require('express');
var bodyParser = require('body-parser');

//create the app
var app = express()
//let the app use the bodyParser module for text
app.use(bodyParser.text({
    //the request is going to return text
    type: function(req){
        return 'text'; 
    }
}));

//use the app (server) to post on the root the request and response
app.post('/', (req, res)=>{
    //print the reqest to the server console
    console.log(req.body);
    //set the response status code
    res = res.status(200); 
    //get the content type of the request
    var contentType = req.get("Content-Type"); 
    //if content type is provided (not an empty string)
    if (contentType){
        //check the content type
        console.log("Content type: " + contentType); 
        //set the content type of the response
        res = res.type(contentType);
    }
    //send a response back to the client
    res.send(req.body);
})

//make the app listen to the client on a port passed in from render or on port 8080
app.listen(process.env.PORT || 8080)

module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
