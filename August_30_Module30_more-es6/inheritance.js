class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed, age){
        super(name, age)
        this.breed = breed;
    }
    
    bark(){
        console.log(`${this.name} is barking`);
    }
}


class cat extends Animal{
    constructor(name, color, age){
        super(name, age);
        this.color = color;
    }


    meow(){
        console.log(`${this.name} is meowing`);
    }
}

class Bird {
    constructor(name, species, age){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    fly(){
        console.log(`${this.name} is flying`);
    }
}

const dog1 = new Dog('Coffee', 'Deshi', 1);
// dog1.eat()
// dog1.bark()
console.log(dog1);


const cat1 = new Cat('SP', 'White', 5)
cat1.eat()

const bird1 = new Bird('kokil', 'deshi', 2);