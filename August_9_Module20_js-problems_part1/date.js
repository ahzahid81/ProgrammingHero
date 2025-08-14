const today = new Date();
const date = new Date('2062-10-19')
console.log(date.getDay());
console.log(date.getMonth());

const specificDate = new Date(2091, 0, 26)
console.log(specificDate);
specificDate.setDate(10);
console.log(specificDate.toLocaleString('en-GB'))

//unix epoc

