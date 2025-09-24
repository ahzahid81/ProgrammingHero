const numbers = [4, 8, 2, 3, 5];

// const doubleIt = x => x*2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(x => x*2);
const fiveTimes = numbers.map(num => num * 5);
const squared = numbers.map(num => num * num);

console.log(doubled);
console.log(squared);
console.log(fiveTimes);

const friends = ['zaved', 'pavel', 'Nobel', 'kodbel'];

const nameLegnths = friends.map(name => name.length)