/***
 * year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year){
    if(year%4 === 4){
        return true;
    }
    else{
        return false;
    }
}

const isLipi = isLeapYear(2025);
console.log(isLipi);

function isLeapYear2(year){
    if(year%100!== 0 && year%4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{

    }
    return false;
}

const isLeap = isLeapYear2 (2100);
const isLeap2 = isLeapYear2 (2400);
const isLeap3 = isLeapYear2 (1900);
const isLeap4 = isLeapYear2 (2052);
const isLeap5 = isLeapYear2 (420);

console.log(isLeap, isLeap2, isLeap3, isLeap4, isLeap5);