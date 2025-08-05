/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var dividedArea = area / 2;
console.log(dividedArea);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
var prize;

if(money >= 25000){
    prize = "Laptop";
}
else if(money >= 10000){
    prize = "Cycle";
}
else{
    prize = "Chocolate";
}

console.log(prize);


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for(var i = 1; i<=lastDay; i++){
    if(i%3===0){
        console.log(i+" - medicine");
    }
    else{
        console.log(i+" - rest");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

var fileArray = fileName.split(".");

if(fileArray[0][0] === '#'){
    console.log("Store");
}
else if(fileArray[1] === "pdf"){
    console.log("Store");
}
else if(fileArray[1] === "docx"){
    console.log("Store");
}
else{
    console.log("Delete");
}

      
/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var emailGenerator= student.name+student.roll+"."+student.department+"@ph.ac.bd";

console.log(emailGenerator);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary =startingSalary;

for(var i=1; i<=experience; i++){
    currentSalary = currentSalary + currentSalary*0.05;
}

console.log(currentSalary.toFixed(2));