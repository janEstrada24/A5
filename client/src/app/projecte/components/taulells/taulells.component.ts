import { Component } from '@angular/core';
import { Casella } from '../../models/Entities/Implementation/Casella';
import { Peca } from '../../models/Entities/Implementation/Peca';
import { Taulell } from '../../models/Entities/Implementation/Taulell';
import { ICasella } from '../../models/Entities/Interfaces/ICasella';
import { IPeca } from '../../models/Entities/Interfaces/IPeca';

@Component({
  selector: 'app-taulells',
  templateUrl: './taulells.component.html',
  styleUrls: ['./taulells.component.css']
})
export class TaulellsComponent {

  taulell: Taulell = new Taulell(1);
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
      this.treurePeca(taulell, this.draggIndex1, this.draggIndex2);
      /*if(pecaDesti.color == "" || pecaDesti.imatge == "") {
        //peca = this.pecaAArrastrar;
        taulell.caselles[i][j].peca = pecaOrigen;
        //taulell.caselles[i][j].peca = new Peca("", "");
      }
      else {
        console.log("no es pot moure");
      }*/
    }
  }

  mourePeca(taulell: Taulell, i: number, j: number, pecaOrigen: Peca) {
    console.log("mourePeca");

    let pecaDesti = taulell.caselles[i][j].peca;
    
    if(pecaDesti.color == "" || pecaDesti.imatge == "") {
      //peca = this.pecaAArrastrar;
      taulell.caselles[i][j].peca = pecaOrigen;
      //taulell.caselles[i][j].peca = new Peca("", "");
      
    }
    else {
      console.log("no es pot moure");
    }
    
  }

  treurePeca(taulell: Taulell, i: number, j: number) {
    console.log("treurePeca");
    taulell.caselles[i][j].peca = new Peca("", "");
  }
  
/*
  dragStart(event: DragEvent) {
    // Almacenar la imagen que se está arrastrando
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.classList.add('dragging');
  }
  
  dragEnd(event: DragEvent) {
    // Eliminar la clase dragging
    event.currentTarget.classList.remove('dragging');
  }
  
  dragOver(event: DragEvent) {
    // Prevenir el comportamiento predeterminado
    event.preventDefault();
  }
  
  dragEnter(event: DragEvent) {
    // Agregar una clase a la tabla cuando la imagen se acerca a ella
    event.currentTarget.classList.add('dragover');
  }
  
  dragLeave(event: DragEvent) {
    // Eliminar la clase dragover cuando la imagen se aleja de la tabla
    event.currentTarget.classList.remove('dragover');
  }
  
  drop(event: DragEvent) {
    // Prevenir el comportamiento predeterminado
    event.preventDefault();
  
    // Obtener la imagen que se está moviendo
    const imagenId = event.dataTransfer.getData('text/plain');
    const imagen = document.getElementById(imagenId);
  
    // Mover la imagen a la nueva posición
    event.currentTarget.appendChild(imagen);
  }
*/
  
}
