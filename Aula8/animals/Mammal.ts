import {Animal} from "./Animal";

export abstract class Mammal extends Animal{
    static nMammals : number = 0

    constructor(h: string="Earth") {
        super(h);
        Mammal.nMammals ++;
    }

    show(){
        return `${super.show()} \n There are ${Mammal.nMammals} Mammals.`;
    }
    talk(){}
}