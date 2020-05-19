'use strict';
//новый строгий стандарт ошибок
//alert('hello, world!');
//let answer = confirm('Are you here?');
//console.log(answer);

// let answer = prompt('Are you here?', 'Да');
// console.log(typeof(null));
let incr = 10,
   decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);
console.log(5 % 2);
console.log('2' == 2);


let isChecked = false,
    isClose = true;

console.log(isChecked && isClose); //если оба првада то     выйдет правда
console.log(isChecked || isClose); //хотя бы один
console.log(isChecked || !isClose); //! меняет на противоп
