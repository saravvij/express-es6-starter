import express from 'express';
const app = express();
import  { hello, findName, welcome }  from './greetings.js';
import User from './src/user.js';

console.log(hello());
console.log(findName('Jon'));
console.log(welcome());

const user = new User();
console.log(user.getUsername());

app.listen(3000, 'localhost', () => console.log('Server started at 3000'));