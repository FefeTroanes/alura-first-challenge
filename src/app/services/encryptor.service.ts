import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncryptorService {
  // @Output() disparadorDelInput: EventEmitter<string> = new EventEmitter();

  // Creo el observable para guardar el input
  // textToEncrypt$?: Observable<string>;

  textToEncrypt: string = '';
  encryptedString: string = '';

  outputedText: string = '';

  // encrypt(texto: string) {
  //   this.textToEncrypt = texto;
  //   console.log(this.textToEncrypt);
  // }

  encrypt() {
    // let textToEncrypt = this.encryptorService.textToEncrypt;
    this.encryptedString = '';
    let cantidad = this.textToEncrypt.length;
    if (cantidad > 0) {
      for (let i = 0; i < cantidad; i++) {
        switch (this.textToEncrypt[i]) {
          case 'a':
            this.encryptedString += 'ai';
            break;
          case 'e':
            this.encryptedString += 'enter';
            break;
          case 'i':
            this.encryptedString += 'imes';
            break;
          case 'o':
            this.encryptedString += 'ober';
            break;
          case 'u':
            this.encryptedString += 'ufat';
            break;
          default:
            this.encryptedString += this.textToEncrypt[i];
            break;
        }
        console.log(this.textToEncrypt[i]);
      }
    }
    return console.log('texto encriptado ', this.encryptedString);
    // return console.log('string ', cantidad);
    // return this.encryptedString;
  }

  decrypt() {}

  // serviceConsole(asd: string) {
  //   this.textToEncrypt = asd;
  // }
}
