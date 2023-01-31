import { Injectable, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncryptorService {
  // @Output() disparadorDelInput: EventEmitter<string> = new EventEmitter();

  // Creo el observable para guardar el input
  // textToEncrypt2: Observable<string> | undefined;

  textToEncrypt: string = '';
  outputedText: string = '';

  // encrypt(texto: string) {
  //   this.textToEncrypt = texto;
  //   console.log(this.textToEncrypt);
  // }

  decrypt() {}

  serviceConsole(asd: string) {
    this.textToEncrypt = asd;
  }
}
