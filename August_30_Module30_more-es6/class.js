/****
 * class --> template
 * object
 * 
 * 
 */

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
    }
    goal(){
        console.log('score a goal')
    }

    getTeamName(){
        return 'Borsa';
    }
}

const player1 = new Player('Zahid', 33);
// player1.goal()
console.log(player1 instanceof Player);
const player2 = new Player('O shanto', 11);
console.log(player2);
