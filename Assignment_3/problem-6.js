// Problem 06 :  Current Salary ( Challenge Problem ) 
// হাসান সাহেব সরকারী চাকুরী করেন ।  তিনি কত বছর ধরে  চাকুরী করেন  সেটা  experience নামে একটা ভ্যারিয়েবলে Save করা আছে । হাসান সাহেবে যে salary দিয়ে জয়েন করেছেন সেটা startingSalary নামে একটা ভ্যারিয়েবলে save করা আছে। 
// প্রতি বছর হাসান সাহেবের স্যালারি ৫% করে বৃদ্ধি হয় । হাসান সাহেবের বর্তমান স্যালারি  কত সেটা বের করার জন্য প্রোগ্রাম লেখো। দশমিকের পর সর্বোচ্চ ২ ডিজিট সংখ্যা থাকবে।  এবং নিচের মতো করে আউটপুট দেখাবে। 
// startingSalary
// (0 < number <=106 ) 
// experience
// (0 < number <=50 ) 
// Output ( up to 2 Decimal ) 
// 45000
// 30 
// 194487.41
// 15000
// 3
// 17364.38
// 30000
// 40
// 211199.66


// নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে ঠিক যেভাবে আউটুপুট দেখাতে বলা হয়েছে সে আউটপুট দেখাও
/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary =startingSalary;

for(var i=1; i<=experience; i++){
    currentSalary = currentSalary + currentSalary*0.05;
}

console.log(currentSalary.toFixed(2));