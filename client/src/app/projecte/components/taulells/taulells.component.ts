import { Component } from '@angular/core';
import { Casella } from '../../models/Entities/Implementation/Casella';
import { Peca } from '../../models/Entities/Implementation/Peca';
import { Taulell } from '../../models/Entities/Implementation/Taulell';
import { ICasella } from '../../models/Entities/Interfaces/ICasella';
import { IPeca } from '../../models/Entities/Interfaces/IPeca';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-taulells',
  templateUrl: './taulells.component.html',
  styleUrls: ['./taulells.component.css']
})
export class TaulellsComponent {

  taulell: Taulell = new Taulell(1, );
  taulell2: Taulell = new Taulell(2);

  draggIndex1!: number;
  draggIndex2!: number;

  constructor() {
    this.taulell.inicialitzarCasellesAmbPeces1();
    this.taulell2.inicialitzarCasellesAmbPeces2();
    console.log(this.taulell);
    console.log("taulell construit");
  }

  dragStart(i: number, j: number) {
    console.log("dragStart");
    this.draggIndex1 = i;
    this.draggIndex2 = j;
  }

  dragOver(event: DragEvent) {
    event.preventDefault();

    console.log("dragOver");
  }

  drop(taulell: Taulell, i: number, j: number) {
    console.log("drop");

    let pecaOrigen = taulell.caselles[this.draggIndex1][this.draggIndex2].peca;

    if (pecaOrigen.color != "" && pecaOrigen.imatge != "") {
      this.mourePeca(taulell, i, j, pecaOrigen);
    }
  }

  mourePeca(taulell: Taulell, i: number, j: number, pecaOrigen: Peca) {
    console.log("mourePeca");

    let pecaDesti = taulell.caselles[i][j].peca;
    
    if(pecaDesti.color != pecaOrigen.color || pecaDesti.color == "" || pecaDesti.imatge == "") {
      taulell.caselles[i][j].peca = pecaOrigen;
      this.treurePeca(taulell, this.draggIndex1, this.draggIndex2);
    }
    else {
      console.log("no es pot moure");
    }
    
  }

  treurePeca(taulell: Taulell, i: number, j: number) {
    console.log("treurePeca");
    taulell.caselles[i][j].peca = new Peca("", "");
  }
  
}
