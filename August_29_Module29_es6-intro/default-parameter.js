function sum(num1, num2=0){
    const total = num1 + num2;
    console.log(num1, num2, total);
}

// NaN --> Not a number

sum(10, 40);


function multiply (num1 = 1, num2 = 1){
    const result = num1*num2;
    console.log(result);
}

multiply(10);


function fullName(first, last=''){
    const name = first + ' ' + last;
    console.log(name);
}

fullName('kamruzzaman');

/****
 * add, subtract --> 0
 * 
 * multiply --> 1
 */