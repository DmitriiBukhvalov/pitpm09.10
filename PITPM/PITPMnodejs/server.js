const os = require('os');
const greeting = require('./module/greeting');
const User = require('./module/user.js');


var greeting1 = require('./module/greeting.js');
console.log(`Hello ${greeting1.name}`); 

var greeting2 = require('./module/greeting.js');
greeting2.name = 'Bob';


global.name = 'Eugene';

global.console.log(date);
console.log(greeting.getMessage());

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));


let eugene = new User('Eugene', 32);
eugene.sayHi();