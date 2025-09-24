function  onlyCharacter( str ) {
    // You have to write your code here
    if(typeof(str) == 'string'){
        const UpdatedString = str.split(' ').join('').toUpperCase();
        return UpdatedString;
    }
    return 'Invalid';
}


console.log(onlyCharacter("  h e llo wor   ld"))
console.log(onlyCharacter("Cy   bar- At  tac k  "))
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "))
console.log(onlyCharacter("Serv er : : Do wn"))
console.log(onlyCharacter(["hack", "me"]))
console.log(onlyCharacter(true))
 




