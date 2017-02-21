//
// var randomAmount = require('./modOneFile.js');
// var newRandom = randomAmount.randomNumber(100,1000000);
// var stringConvert= require('./modTwo.js');
// var newDollarString = stringConvert.stringConverter(newRandom);
var modThreePete = require('./module-three.js');
var randomFinalAmount = modThreePete.randomMoney();
var http = require('http');

http.createServer(function(req, res){
res.writeHead(200);
res.write(randomFinalAmount);
res.end();
}).listen(5000);
