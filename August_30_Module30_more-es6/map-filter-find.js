const student = [
    {id: 1, name : 'abul', marks: 50},
    {id: 2, name : 'Nabul', marks: 55},
    {id: 3, name : 'Kabul', marks: 95},
    {id: 4, name : 'dabul', marks: 15},
]

const names = student.map(student => student.marks)

console.log(names);