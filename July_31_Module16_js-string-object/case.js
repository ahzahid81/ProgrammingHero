const school = 'RAJ UK Uttara Model School';

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("I am reading book aibar porikkhai fatai felmu")
}
else{
    console.log("hudai hudai prista ultai ar var khawar joono");
}

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const drink = 'water';
const liquid = '    water  ';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam Life');
}
else{
    console.log('Pani nai')
}