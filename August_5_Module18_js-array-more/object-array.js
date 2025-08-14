const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employees = [
    {name: 'Ashik', desgination: 'Content Writer', salary: 25000},
    {name: 'Atik', desgination: 'Developer', salary: 29000},
    {name: 'Abdul Rahim', desgination: 'Digital Marketer', salary: 21000},
    {name: 'Asifa', desgination: 'Web Dev', salary: 29000}
]

// console.log(employees[3].desgination);

// for(const employee of employees){
//     console.log(employee.salary, employee.desgination);
// }

for(const emp of employees){
    const person = emp;
    const personInfo = person.name + ':' + person.salary;
    console.log(personInfo);
}