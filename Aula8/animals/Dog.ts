import {Canine} from "./Canine";

export class Dog extends Canine{
    static nDogs : number = 0;
    bark : string;

    constructor(race : string, bark: string,h: string="Earth") {
        super(race,h);
        Dog.nDogs++;
        this.bark=bark;
    }
    show(){
        return `${super.show()} \n There are ${Dog.nDogs} Dogs.`;
    }

    talk(){
        return this.bark;
    }
}