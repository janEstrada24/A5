import { Component } from '@angular/core';
import { Equip } from '../../models/Entities/Implementation/Equip';
import { Jugador } from '../../models/Entities/Implementation/Jugador';
import { EquipService } from '../../services/Equip/equip.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-entrar-equips',
  templateUrl: './entrar-equips.component.html',
  styleUrls: ['./entrar-equips.component.css']
})

export class EntrarEquipsComponent {
  equip!: Equip;
  currentEquip!: Equip;
  equips!: Observable<Equip[]>;
  private _equipSub!: Subscription;

  jugador1: Jugador = new Jugador('');
  jugador2: Jugador = new Jugador('');

  constructor(private equipService: EquipService) { }

  ngOnInit() {
    this.equips = this.equipService.equips;
    this._equipSub = this.equipService.currentEquip.subscribe(equip => this.currentEquip = equip);
  };

  crearEquip() {
    this.equipService.newEquip();
    /*if (this.equip.nom != '' && this.jugador1.nom != '' && this.jugador2.nom != '') {
      this.equip.jugadors.push(this.jugador1);
      this.equip.jugadors.push(this.jugador2);
      console.log(this.equip);
    } else {
      console.log("No s'ha pogut crear l'equip");
    }*/
  }

  ngOnDestroy() {
    this._equipSub.unsubscribe();
  }
}
