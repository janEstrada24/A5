import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Peca } from '../../models/Entities/Implementation/Peca';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  pecesTretes: Observable<Peca[]> = this.socket.fromEvent<Peca[]>('pecesTretes');

  constructor(private socket: Socket) { }

  guardarPecaTreta(peca: Peca) {
    this.socket.emit('guardarPecaTreta', peca);
  }

  getPecesTretes() {
    this.socket.emit('getPecesTretes', () => { 
      console.log("getPecesTretes");
    });
  }
}
