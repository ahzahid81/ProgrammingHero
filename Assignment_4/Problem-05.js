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


console.log(resultReport([]))
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))
console.log(resultReport([99, 87, 67, 12 ,87]))
console.log(resultReport([99]))
console.log(resultReport(100))

