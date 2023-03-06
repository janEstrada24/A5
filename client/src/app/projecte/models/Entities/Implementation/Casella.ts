import { ICasella } from "../Interfaces/ICasella";

export class Casella implements ICasella {
    lletra: string;
    num: number;
    color: string;

    constructor(lletra: string, num: number, color: string) {
        this.lletra = lletra;
        this.num = num;
        this.color = color;
    }

}