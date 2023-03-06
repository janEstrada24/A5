import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  constructor() { }

  getEquip(num: string) {
  }

  getEquips() {
  }
  // 
    private docId() {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
      for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
  
      return text;
    }
}
