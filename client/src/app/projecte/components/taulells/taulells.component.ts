import { Component } from '@angular/core';
import { Taulell } from '../../models/Entities/Implementation/Taulell';
import { ICasella } from '../../models/Entities/Interfaces/ICasella';

@Component({
  selector: 'app-taulells',
  templateUrl: './taulells.component.html',
  styleUrls: ['./taulells.component.css']
})
export class TaulellsComponent {

  caselles!: ICasella[][];
  taulell: Taulell = new Taulell(0);

  constructor() {
    this.construirTaulell();
    console.log("taulell construit");
  }

  construirTaulell() {
    /*for (let i = 0; i < 8; i++) {
      let fila = [];
      for (let j = 0; j < 8; j++) {
        fila.push((i * j + j) + 1);
      }
      //this.caselles.push(fila);
    }
    console.log(this.caselles);
    return this.caselles;*/
    this.taulell.inicialitzarCaselles();
    console.log(this.taulell);
    return this.taulell;
  }

  
}
