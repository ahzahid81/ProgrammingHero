// Problem-01
function totalFine( fare ) {
    // You have to write your code here
    if(typeof(fare) == 'number' && fare > 0){
        const fine = fare + (fare/100)*20 + 30;
        return fine;
    }

    return "Invalid";
}

//Problem-02
function  onlyCharacter( str ) {
    // You have to write your code here
    if(typeof(str) == 'string'){
        const UpdatedString = str.split(' ').join('').toUpperCase();
        return UpdatedString;
    }
    return 'Invalid';
}

//Problem-03
function  bestTeam( player1, player2 ) {
    // You have to write your code here
    if(typeof(player1) == "object" && typeof(player2) == "object"){
        if(player1.foul + player1.cardY + player1.cardR < player2.foul + player2.cardY + player2.cardR){
            return player1.name;
        }
        else if(player1.foul + player1.cardY + player1.cardR > player2.foul + player2.cardY + player2.cardR){
            return player2.name
        }
        else{
            return "Tie";
        }
    }
    return "Invalid";
}

//Problem-4
function  isSame(arr1 , arr2 ) {
    // You have to write your code here
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        if(arr1.length !== arr2.length){
            return false;
        }
        for(i=0; i<arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false
            }
        }
        return true;
    }
    return "Invalid"
}

//Problem-05
function  resultReport( marks ) {
    // You have to write your code here
    if(Array.isArray(marks)){
        let finalScore = 0;
        let pass = 0;
        let fail = 0;
        let total = 0;

        for(let i = 0; i<marks.length; i++){
            total = total + marks[i];
            if(marks[i] >= 40){
                pass++;
            }
            else{
                fail++;
            }
        }

        if(marks.length === 0){
            finalScore = 0;
        }
        else{
            finalScore = Math.round(total/marks.length);
        }

        return { "finalScore": finalScore, "pass": pass, "fail": fail };
    }

    return "Invalid";
}
