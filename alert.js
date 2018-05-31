'use strict'

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
}

let json = JSON.stringify(student)

function logSomething() {
  console.log('Something')
}
logSomething()
console.log(json)

// alert(typeof json); // we've got a string!
//
//
//
// alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
} */

// console.log(json);
