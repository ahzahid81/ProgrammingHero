const numbers = [1, 2, 54, 1, 4, 60]

const employee = {
    name : 'Raja Rani',
    designation : 'QA',
    salary : 20000,
    experience : 1,
    age : 11
}

for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}