function totalFine( fare ) {
    // You have to write your code here
    if(typeof(fare) == 'number' && fare > 0){
        const fine = fare + (fare/100)*20 + 30;
        return fine;
    }

    return "Invalid";
}

console.log(totalFine(200))
console.log(totalFine(0))
console.log(totalFine(50))
console.log(totalFine(552))
console.log(totalFine(-35))
console.log(totalFine("65"))
console.log(totalFine("Gorib tai ticket katinai"))


