import { IEquip } from "../Interfaces/IEquip";
import { IJugador } from "../Interfaces/IJugador";
import { IPeca } from "../Interfaces/IPeca";

export class Equip implements IEquip<IJugador<IPeca>> {
    num!: number;
    nom!: string;
    jugadors!: Array<IJugador<IPeca>>;

    constructor (nom: string, num: number) {
        this.nom = nom;
        this.num = num;
        this.jugadors = [];
    }
}