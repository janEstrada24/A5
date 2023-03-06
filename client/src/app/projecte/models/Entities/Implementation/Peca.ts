import { IPeca } from '../Interfaces/IPeca';

export class Peca implements IPeca{
    numero!: number;
    imatge!: string;
    color!: string;
    
    constructor (numero: number, imatge: string, color: string) {
        this.numero = numero;
        this.imatge = imatge;
        this.color = color;
    }
}