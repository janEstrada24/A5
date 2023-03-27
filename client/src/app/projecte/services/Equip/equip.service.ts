import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Equip } from '../../models/Entities/Implementation/Equip';

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  

  constructor(private socket: Socket) { }

  newEquip() {
    this.socket.emit('newEquip', { num: this.equipId(), nom: '' }));
  }

  getEquip(num: string) {
  }

  getEquips() {
  }

  // 
  private equipId() {
    let num = '';
    const possible = '0123456789';

    for (let i = 0; i < 5; i++) {
      num += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return num;
  }
}
