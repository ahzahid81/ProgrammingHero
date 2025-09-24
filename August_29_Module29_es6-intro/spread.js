const numbers = [87, 8, 5, 91];
console.log(numbers);
console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);

const first = [1, 2, 3, 4, 5];
const second = [...first]
const third = [0, ...first]

second.push(6);
console.log(first);
console.log(second);
console.log(third);

const person = {name: 'Parmisan', age: 25}
const employee = {designation: 'dev', ...person}
console.log(employee)


const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21)
const digits = [78, 55, 66]