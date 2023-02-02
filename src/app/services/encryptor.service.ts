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

  itsEncrypted: boolean = false;

  encrypt() {
    this.encryptedString = '';
    let cantidad = this.textToEncrypt.length;
    if (cantidad > 0) {
      if(this.itsEncrypted) {
        for (let i = 0; i < cantidad; i++) {
          switch (this.textToEncrypt[i]) {
            case 'a':
              if (this.textToEncrypt[i+1] == 'i') {
                this.encryptedString += 'a';
                i += 1;
                break;
              } else {
                this.encryptedString += 'a';
                break;
              }
            case 'e':
              if(
                this.textToEncrypt[i+1] == 'n' &&
                this.textToEncrypt[i+2] == 't' &&
                this.textToEncrypt[i+3] == 'e' &&
                this.textToEncrypt[i+4] == 'r'
              ) {
                this.encryptedString += 'e';
                i += 4;
                break;
              } else {
                this.encryptedString += 'e';
                break;
              }
            case 'i':
              if(
                this.textToEncrypt[i+1] == 'm' &&
                this.textToEncrypt[i+2] == 'e' &&
                this.textToEncrypt[i+3] == 's'
              ) {
                this.encryptedString += 'i';
                i += 3;
                break;
              } else {
                this.encryptedString += 'i';
                break;
              }
            case 'o':
              if(
                this.textToEncrypt[i+1] == 'b' &&
                this.textToEncrypt[i+2] == 'e' &&
                this.textToEncrypt[i+3] == 'r'
              ) {
                this.encryptedString += 'o';
                i += 3;
                break;
              } else {
                this.encryptedString += 'o';
                break;
              }
            case 'u':
              if(
                this.textToEncrypt[i+1] == 'f' &&
                this.textToEncrypt[i+2] == 'a' &&
                this.textToEncrypt[i+3] == 't'
              ) {
                this.encryptedString += 'u';
                i += 3;
                break;
              } else {
                this.encryptedString += 'u';
                break;
              }
            default:
              this.encryptedString += this.textToEncrypt[i];
              break;
          }
          console.log(this.textToEncrypt[i]);
        }
      } else {
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
    }
    return console.log('texto encriptado ', this.encryptedString);
  }

  itsAnEncryptedText() {
    if (
      this.textToEncrypt.includes('ai') ||
      this.textToEncrypt.includes('enter') ||
      this.textToEncrypt.includes('imes') ||
      this.textToEncrypt.includes('ober') ||
      this.textToEncrypt.includes('ufat')) {
      return this.itsEncrypted = true
    } else {
      return this.itsEncrypted = false
    }
  }

  // decrypt() {
  //   // let textToEncrypt = this.encryptorService.textToEncrypt;
  //   this.encryptedString = '';
  //   let cantidad = this.textToEncrypt.length;
  //   if (cantidad > 0) {
  //     for (let i = 0; i < cantidad; i++) {
  //       switch (this.textToEncrypt[i]) {
  //         case 'a':
  //           this.encryptedString += 'a';
  //           i += 1;
  //           break;
  //         case 'e':
  //           this.encryptedString += 'e';
  //           i += 4;
  //           break;
  //         case 'i':
  //           this.encryptedString += 'i';
  //           i += 3;
  //           break;
  //         case 'o':
  //           this.encryptedString += 'o';
  //           i += 3;
  //           break;
  //         case 'u':
  //           this.encryptedString += 'u';
  //           i += 3;
  //           break;
  //         default:
  //           this.encryptedString += this.textToEncrypt[i];
  //           break;
  //       }
  //       console.log(this.textToEncrypt[i]);
  //     }
  //   }
  //   return console.log('texto encriptado ', this.encryptedString);
  //   // return console.log('string ', cantidad);
  //   // return this.encryptedString;
  // }

  // serviceConsole(asd: string) {
  //   this.textToEncrypt = asd;
  // }
}
