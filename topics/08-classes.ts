

export class Person {
    //public name: string;
    //public address: string;

    constructor ( 
        public firstName: string,
        public lastName: string,
        private address: string = 'No Address'
        ){
        //this.name = name;
        //this.address = address;
    }

}

//Herencia --> extends
//export class Hero extends Person {
//    constructor(
//        public alterEgo: string,
//        public age: number,
//        public realName: string,
//        
//    ) {
//        //super padre del constructor
//        super( realName, 'Córdoba' )
//    }
//}

export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
        
    ) {
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony','Star','Córdoba');

const ironman = new Hero('Inronman',45,'Tony Star',tony);
console.log(ironman)