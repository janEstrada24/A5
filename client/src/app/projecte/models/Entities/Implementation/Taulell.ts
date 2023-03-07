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
        this.inicialitzarCasellesAmbPeces();
    }    

    public inicialitzarCaselles(): void {
        for (let i = 1; i < 9; i++) {
            this.caselles[i] = [];
            for (let j = 1; j < 9; j++) {
                console.log("i = " + i + " j = " + j);
                this.caselles[i][j] = new Casella (
                                        String.fromCharCode(65 + j - 1), 
                                        i + 1, 
                                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                                        new Peca(0, "", "") 
                                    );
                console.log(this.caselles[i][j]);
            }
        }
    }

    public inicialitzarCasellesAmbPeces(): void {
        const peces = ["/assets/peces/torre", "/assets/peces/alfil", "/assets/peces/cavall", "/assets/peces/reina", 
                        "/assets/peces/rei", "/assets/peces/cavall", "/assets/peces/alfil", "/assets/peces/torre"];

        for (let i = 1; i < 9; i++) {
            this.caselles[i] = [];
            for (let j = 1; j < 9; j++) {
                console.log("i = " + i + " j = " + j);
                
                console.log(this.caselles[i][j]);

                if (i == 1) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(i,peces[i]+"Blanc.png","blanca")
                    );
                }
                else if (i == 2) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(i,"peoBlanc.png","blanca")
                    );
                }
                else if (i == 8) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(i,"peoNegre.png","negra")
                    );
                }
                else if (i == 9) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(i,peces[i]+"Negre.png","negra")
                    );
                } else {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(0, "", "") 
                    );
                }
            }
        }
    }

    public crearPeces(): void {
        const peces = ["/assets/peces/torre", "/assets/peces/alfil", "/assets/peces/cavall", "/assets/peces/reina", 
                        "/assets/peces/rei", "/assets/peces/cavall", "/assets/peces/alfil", "/assets/peces/torre"];

        for (let i = 1; i < 9; i++) {
            this.caselles[i] = [];

            for (let j = 1; j < 9; j++) {

                if (i == 1) {
                    this.caselles[i][j].peca = new Peca(i,peces[i]+"Blanc.png","blanca");
                }
                else if (i == 2) {
                    this.caselles[i][j].peca = new Peca(i,"peoBlanc.png","blanca");
                }
                else if (i == 8) {
                    this.caselles[i][j].peca = new Peca(i,"peoNegre.png","negra");
                }
                else if (i == 9) {
                    this.caselles[i][j].peca = new Peca(i,peces[i]+"Negre.png","negra");
                }
            }
        }

        /*this.pecesBlanques.push(new Peca(2, "/assets/pecesBlanques/reinaBlanca.png", "blanca"));
        this.pecesBlanques.push(new Peca(3, "/assets/pecesBlanques/torreBlanca.png", "blanca"));
        this.pecesBlanques.push(new Peca(4, "/assets/pecesBlanques/torreBlanca.png", "blanca"));
        this.pecesBlanques.push(new Peca(5, "../../../../../assets/pecesBlanques/alfilBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(6, "../../../../../assets/pecesBlanques/alfilBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(7, "../../../../../assets/pecesBlanques/cavallBlanc.png", "blanca"));
        this.pecesBlanques.push(new Peca(8, "../../../../../assets/pecesBlanques/cavallBlanc.png", "blanca"));

        for (let i = 9; i < 16; i++) {
            this.pecesBlanques.push(new Peca(i, "../../../../../assets/pecesBlanques/peoBlanc.png", "blanca"));
        }*/
    }

    /*public crearPecesNegres(): void {
        this.pecesNegres.push(new Peca(1, "../../../../../assets/pecesNegres/reiNegre.png", "negra"));
        this.pecesNegres.push(new Peca(2, "../../../../../assets/pecesNegres/reinaNegre.png", "negra"));
        this.pecesNegres.push(new Peca(3, "../../../../../assets/pecesNegres/torreNegre.png", "negra"));
        this.pecesNegres.push(new Peca(4, "../../../../../assets/pecesNegres/torreNegre.png", "negra"));
        this.pecesNegres.push(new Peca(5, "../../../../../assets/pecesNegres/alfilNegre.png", "negra"));
        this.pecesNegres.push(new Peca(6, "../../../../../assets/pecesNegres/alfilNegre.png", "negra"));
        this.pecesNegres.push(new Peca(7, "../../../../../assets/pecesNegres/cavallNegre.png", "negra"));
        this.pecesNegres.push(new Peca(8, "../../../../../assets/pecesNegres/cavallNegre.png", "negra"));

        for (let i = 9; i < 16; i++) {
            this.pecesNegres.push(new Peca(i, "../../../../../assets/pecesNegres/peoNegre.png", "negra"));
        }
    }*/
}