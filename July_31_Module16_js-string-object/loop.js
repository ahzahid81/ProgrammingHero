const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}