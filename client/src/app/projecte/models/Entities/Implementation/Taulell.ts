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
                                        new Peca("", "") 
                                    );
                console.log(this.caselles[i][j]);
            }
        }
    }

    public inicialitzarCasellesAmbPeces(): void {
        console.log("inicialitzarCasellesAmbPeces");
        for (let i = 0; i < 8; i++) {
            this.caselles[i] = [];
            /*for (let j = 0; j < 8; j++) {
               console.log("i = " + i + " j = " + j);
                if (i == 0) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(peces[i]+"Blanc.png","blanca")
                    );
                }
                else if (i == 1) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca("peoBlanc.png","blanca")
                    );
                }
                else if (i == 7) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca("peoNegre.png","negra")
                    );
                }
                else if (i == 8) {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i + 1, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca(peces[i]+"Negre.png","negra")
                    );
                } else {
                    this.caselles[i][j] = new Casella (
                        String.fromCharCode(65 + j - 1), 
                        i, 
                        (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                        new Peca("", "") 
                    );
                }
                console.log(this.caselles[i][j]);

            }*/
        }
        this.posarPeces(0,"Blanc.png","blanca");
        this.posarPeces(7,"Negre.png","negra");
        this.posarPeons(1,"peoBlanc.png","blanques");
        this.posarPeons(6,"peoNegre.png","negres");

        this.crearCasellesBuides();
    }

    public posarPeces(posicioFila: number, cadenaColor: string, color: string) {
        console.log("pecaPosada");

        const peces = ["/assets/torre", "/assets/alfil", "/assets/cavall", "/assets/reina", 
                        "/assets/rei", "/assets/cavall", "/assets/alfil", "/assets/torre"];

        for (let j = 0; j < 8; j++) {
            this.caselles[posicioFila][j] = new Casella (
                                                String.fromCharCode(65 + j - 1), 
                                                posicioFila + 1, 
                                                (posicioFila + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                                                new Peca(peces[j] + cadenaColor, color)
                                            );
            console.log(this.caselles[posicioFila][j]);
        }

    }

    public crearCasellesBuides() {
        for (let i = 2; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                this.caselles[i][j] = new Casella (
                    String.fromCharCode(65 + j - 1), 
                    i + 1, 
                    (i + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                    new Peca("", "")
                );
            }
        }
    }

    public posarPeons(posicioFila: number, cadenaColor: string, color: string) {
        
        for (let j = 0; j < 8; j++) {

            this.caselles[posicioFila][j] = new Casella (
                                                String.fromCharCode(65 + j - 1), 
                                                posicioFila + 1, 
                                                (posicioFila + j) % 2 == 0 ? "#e3dc9f" : "#ff9900", 
                                                new Peca("/assets/" + cadenaColor,color)
                                            );
        }

    }

    public crearPeces(): void {
        const peces = ["/assets/peces/torre", "/assets/peces/alfil", "/assets/peces/cavall", "/assets/peces/reina", 
                        "/assets/peces/rei", "/assets/peces/cavall", "/assets/peces/alfil", "/assets/peces/torre"];

        for (let i = 1; i < 9; i++) {
            this.caselles[i] = [];

            for (let j = 1; j < 9; j++) {

                if (i == 1) {
                    this.caselles[i][j].peca = new Peca(peces[i]+"Blanc.png","blanca");
                }
                else if (i == 2) {
                    this.caselles[i][j].peca = new Peca("peoBlanc.png","blanca");
                }
                else if (i == 8) {
                    this.caselles[i][j].peca = new Peca("peoNegre.png","negra");
                }
                else if (i == 9) {
                    this.caselles[i][j].peca = new Peca(peces[i]+"Negre.png","negra");
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

    public crearPecesNegres(fila: Array<Casella>): void {
        /*this.pecesNegres.push(new Peca(1, "../../../../../assets/pecesNegres/reiNegre.png", "negra"));
        this.pecesNegres.push(new Peca(2, "../../../../../assets/pecesNegres/reinaNegre.png", "negra"));
        this.pecesNegres.push(new Peca(3, "../../../../../assets/pecesNegres/torreNegre.png", "negra"));
        this.pecesNegres.push(new Peca(4, "../../../../../assets/pecesNegres/torreNegre.png", "negra"));
        this.pecesNegres.push(new Peca(5, "../../../../../assets/pecesNegres/alfilNegre.png", "negra"));
        this.pecesNegres.push(new Peca(6, "../../../../../assets/pecesNegres/alfilNegre.png", "negra"));
        this.pecesNegres.push(new Peca(7, "../../../../../assets/pecesNegres/cavallNegre.png", "negra"));
        this.pecesNegres.push(new Peca(8, "../../../../../assets/pecesNegres/cavallNegre.png", "negra"));
*/

        for (let i = 0; i < 8; i++) {
          
            fila[i].peca = new Peca("/assets/pecesNegres/peoNegre.png", "negra");
        }
    }
}