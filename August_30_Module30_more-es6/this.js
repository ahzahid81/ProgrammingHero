class Vehicle{
    #tin;
    constructor(type, brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.#tin = '12154512154wadf245';
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price;
    }
    getTin(){
        return this.#tin;
    }
}

const car1 = new Vehicle('Car', 'Honda', 50000)
const car2 = new Vehicle('Car', 'Toyota', 40000)
// car1.getThis()

// console.log(car2.getPrice())
// console.log(car1.getPrice())


const student = {
    name : 'Rahul darvid',
    score : 10000,
    getScore: function(){
        console.log(this)
    },

    getScoreArrow: () => {
        console.log(this);
    }
}

// student.getScore()
// student.getScoreArrow()
// console.log('ultimate this', this);
console.log(car1.getTin())


