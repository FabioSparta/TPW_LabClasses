import {Mammal} from "./Mammal";

export class Canine extends Mammal{
    static nCanines : number = 0;
    race : string;

    constructor(race: string,h: string="Earth" ) {
        super(h);
        Canine.nCanines++;
        this.race = race;
    }
    show(){
        return `${super.show()} \n There are ${Canine.nCanines} Canines. \n Im a(n) ${this.race}`;
    }

}