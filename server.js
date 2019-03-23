// https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/ramstein-conference-app'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/ramstein-conference-app/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('Listening...');
