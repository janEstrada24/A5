import { Component } from '@angular/core';
import { Taulell } from '../../models/Entities/Implementation/Taulell';
import { ICasella } from '../../models/Entities/Interfaces/ICasella';
import { IPeca } from '../../models/Entities/Interfaces/IPeca';

@Component({
  selector: 'app-taulells',
  templateUrl: './taulells.component.html',
  styleUrls: ['./taulells.component.css']
})
export class TaulellsComponent {

  caselles!: ICasella[][];
  taulell: Taulell = new Taulell(0);
  taulell2: Taulell = new Taulell(0);
  pecesBlanques: IPeca[] = [];
  pecesNegres: IPeca[] = [];

  draggIndex: number = 0;

  constructor() {
    this.taulell.inicialitzarCasellesAmbPeces1();
    this.taulell2.inicialitzarCasellesAmbPeces2();
    console.log(this.taulell);
    console.log("taulell construit");
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
