var VERIFY_TOKEN = 'FullGospel';
var ACCESS_TOKEN = 'dfd3ebb0a51fe39628882e5a496a250c';
 
 
var express = require('express');
var bodyParser = require('body-parser');
var Botly = require('botly');
var botly = new Botly({
    accessToken: ACCESS_TOKEN,
    verifyToken: VERIFY_TOKEN,
    webHookPath: '/',
    notificationType:  Botly.CONST.REGULAR
});
 
botly.on('message', function (userId, message, data) {
    console.log(data);
    botly.sendText({id: userId , text : 'Hello back from BOT!!!'} , function(error , data)
    {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log('message sent...');
        }
    });
});
 
botly.on("postback", function (userId, message, postback) {
    console.log(postback);
});
 
 
var app = express();
app.use(bodyParser.json());
app.use("/webhook", botly.router());
app.listen(8081);