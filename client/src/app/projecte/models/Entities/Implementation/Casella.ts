import { ICasella } from "../Interfaces/ICasella";
import { Peca } from "./Peca";

export class Casella implements ICasella {
    lletra: string;
    num: number;
    color: string;
    peca: Peca;

    constructor(lletra: string, num: number, color: string, peca: Peca) {
        this.lletra = lletra;
        this.num = num;
        this.color = color;
        this.peca = peca;
    }

}