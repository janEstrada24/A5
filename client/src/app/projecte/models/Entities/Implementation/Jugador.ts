import { IJugador } from "../Interfaces/IJugador";
import { IPeca } from "../Interfaces/IPeca";

export class Jugador implements IJugador<IPeca> {
    nom!: string;
    pecesInicials!: Array<IPeca>;
    pecesPerdudes!: Array<IPeca>;

    constructor (nom: string) {
        this.nom = nom;
        this.pecesPerdudes = [];    
    }
}