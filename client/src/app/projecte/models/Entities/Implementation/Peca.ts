import { IPeca } from '../Interfaces/IPeca';

export class Peca implements IPeca{
    imatge!: string;
    color!: string;
    
    constructor (imatge: string, color: string) {
        this.imatge = imatge;
        this.color = color;
    }
}