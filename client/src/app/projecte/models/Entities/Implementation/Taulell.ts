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
        //this.inicialitzarCasellesAmbPeces1();
    }    

    public inicialitzarCasellesAmbPeces1(): void {
        console.log("inicialitzarCasellesAmbPeces");
        for (let i = 0; i < 8; i++) {
            this.caselles[i] = [];
        }
        this.posarPeces(0,"Blanc.png","blanca");
        this.posarPeces(7,"Negre.png","negra");
        this.posarPeons(1,"peoBlanc.png","blanques");
        this.posarPeons(6,"peoNegre.png","negres");

        this.crearCasellesBuides();
    }

    public inicialitzarCasellesAmbPeces2(): void {
        console.log("inicialitzarCasellesAmbPeces");
        for (let i = 0; i < 8; i++) {
            this.caselles[i] = [];
        }
        this.posarPeces(0,"Negre.png","negra");
        this.posarPeces(7,"Blanc.png","blanca");
        this.posarPeons(1,"peoNegre.png","negres");
        this.posarPeons(6,"peoBlanc.png","blanques");

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

}