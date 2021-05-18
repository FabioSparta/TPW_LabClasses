export abstract class Animal{
    static nAnimals : number = 0
    habitat : string

    constructor(h: string = "Earth") {
        Animal.nAnimals ++;
        this.habitat = h;
    }

    show(){
        return `Im an animal, i live in ${this.habitat}. Quantity of Animals: ${(Animal.nAnimals)}`;
    }
}