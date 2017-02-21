var randomAmount = require('./modOneFile.js');
var stringConvert= require('./modTwo.js');


function randomMoney(){
var newRandom = randomAmount.randomNumber(100,1000000);
var newDollarString = stringConvert.stringConverter(newRandom);
return newDollarString;
}
module.exports ={
randomMoney:randomMoney
}
