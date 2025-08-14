// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// Output: ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

// for(i=colors.length-1; i>=0; i--){
//     reversedColors.push(colors[i]);
// }

for(i=0; i<colors.length; i++){
    reversedColors.unshift(colors[i]);
}
console.log(reversedColors);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output: [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for(i=0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output:'TomTimTinTik'

var number1 = ['Tom', 'Tim', 'Tin', 'Tik'];
var singleString = "";

for(i=0; i<number1.length; i++){
    singleString = singleString + number1[i];
}
console.log(singleString);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// Input: const statement = 'I am a hard working person'
// Output: 'person working hard a am I'

const statement = 'I am a hard working person';
const statementArray = statement.split(" ");
console.log(statement);
console.log(statementArray);
var reversedStatement = "";

for(var i = statementArray.length - 1; i>=0; i++){
    reversedStatement = reversedStatement + " " + statementArray[i];
}

console.log(reversedStatement);
