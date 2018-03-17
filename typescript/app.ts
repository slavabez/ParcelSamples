class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    greet(){
        alert(`Hi! I'm ${this.name}`);
    }
}

const masha = new Person('Masha');
masha.greet();