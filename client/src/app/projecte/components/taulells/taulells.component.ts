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
  pecesBlanques: IPeca[] = [];
  pecesNegres: IPeca[] = [];

  constructor() {

    console.log(this.taulell);
    console.log("taulell construit");
  }


}
