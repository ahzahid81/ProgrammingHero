const mobile = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'Vivo', price: 25000, camera: '12mp', color: 'black'},
    {name: 'Realme', price: 29000, camera: '12mp', color: 'black'},
    {name: 'HPhone', price: 21000, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price ){
            min = phone;
        }
    }

    return min;
}


const cheap = getCheapestPhone(mobile);
console.log('Cheapest Phone', cheap)