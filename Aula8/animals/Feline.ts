import {Mammal} from "./Mammal";

export class Feline extends Mammal{
    static nFelines : number = 0;
    race : string;

    constructor(race: string,h: string="Earth" ) {
        super(h);
        Feline.nFelines++;
        this.race = race;
    }
    show(){
        return `${super.show()} \n There are ${Feline.nFelines} Felines. \n Im a(n) ${this.race}`;
    }

}