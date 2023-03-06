import { ICasella } from "../Interfaces/ICasella";
import { IPeca } from "../Interfaces/IPeca";
import { ITaulell } from "../Interfaces/ITaulell";
import { Casella } from "./Casella";
import { Peca } from "./Peca";

export class Taulell implements ITaulell<IPeca> {
    num!: number;
    pecesBlanques!: Array<IPeca>;
    pecesNegres!: Array<IPeca>;
    caselles!: Array<Array<ICasella>>;

    constructor (num: number) {
        this.num = num;
        this.pecesBlanques = [];
        this.pecesNegres = [];
        this.caselles = new Array<Array<ICasella>>();
        this.inicialitzarCaselles();
        this.crearPecesBlanques();
        this.crearPecesNegres();
    }    

    public inicialitzarCaselles(): void {
        for (let i = 0; i < 8; i++) {
            this.caselles[i] = [];
            for (let j = 0; j < 8; j++) {
                console.log("i = " + i + " j = " + j);
                this.caselles[i][j] = new Casella (
                                        String.fromCharCode(65 + j), 
                                        i + 1, 
                                        (i + j) % 2 == 0 ? "#d49b74" : "#ff9900"
                                        
                                    );
                console.log(this.caselles[i][j]);
            }
        }
    }

    public crearPecesBlanques(): void {
        this.pecesBlanques.push(new Peca(1, "../../../../../assets/pecesBlanques/reiBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(2, "../../../../../assets/pecesBlanques/reinaBlanca.png", "blanca"));
        this.pecesBlanques.push(new Peca(3, "../../../../../assets/pecesBlanques/torreBlanca.png", "blanca"));
        this.pecesBlanques.push(new Peca(4, "../../../../../assets/pecesBlanques/torreBlanca.png", "blanca"));
        this.pecesBlanques.push(new Peca(5, "../../../../../assets/pecesBlanques/alfilBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(6, "../../../../../assets/pecesBlanques/alfilBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(7, "../../../../../assets/pecesBlanques/cavallBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(8, "../../../../../assets/pecesBlanques/cavallBlanc.png", "blanca"));

        for (let i = 9; i < 16; i++) {
            this.pecesBlanques.push(new Peca(i, "../../../../../assets/pecesBlanques/peoBlanc.png", "blanca"));
        }
    }

    public crearPecesNegres(): void {
        this.pecesNegres.push(new Peca(1, "../../../../../assets/pecesNegres/reiNegre.png", "negra"));
        this.pecesNegres.push(new Peca(2, "../../../../../assets/pecesNegres/reinaNegra.png", "negra"));
        this.pecesNegres.push(new Peca(3, "../../../../../assets/pecesNegres/torreNegra.png", "negra"));
        this.pecesNegres.push(new Peca(4, "../../../../../assets/pecesNegres/torreNegra.png", "negra"));
        this.pecesNegres.push(new Peca(5, "../../../../../assets/pecesNegres/alfilNegre.png", "negra"));
        this.pecesNegres.push(new Peca(6, "../../../../../assets/pecesNegres/alfilNegre.png", "negra"));
        this.pecesNegres.push(new Peca(7, "../../../../../assets/pecesNegres/cavallNegre.png", "negra"));
        this.pecesNegres.push(new Peca(8, "../../../../../assets/pecesNegres/cavallNegre.png", "negra"));

        for (let i = 9; i < 16; i++) {
            this.pecesNegres.push(new Peca(i, "../../../../../assets/pecesNegres/peoNegre.png", "negra"));
        }
    }
}