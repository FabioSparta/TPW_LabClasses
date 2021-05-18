import {Feline} from "./Feline";

export class Cat extends Feline{
    static nCats : number = 0;
    meow : string;

    constructor(race : string, meow: string,h: string="Earth") {
        super(race,h);
        Cat.nCats++;
        this.meow=meow;
    }
    show(){
        return `${super.show()} \n There are ${Cat.nCats} Cats.`;
    }

    talk(){
        return this.meow;
    }
}