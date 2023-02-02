import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncryptorService {
  // @Output() disparadorDelInput: EventEmitter<string> = new EventEmitter();

  // Creo el observable para guardar el input
  // textToEncrypt$?: Observable<string>;

  // Variables normales
  textToEncrypt: string = '';
  encryptedString: string = '';
  itsEncrypted: boolean = false;

  // Variables OBSERVABLES
  textToEncrypt$ = new BehaviorSubject<string>('');
  encryptedString$ = new BehaviorSubject<string>('');
  itsEncrypted$ = new BehaviorSubject<boolean>(false);

  // GETTERS
  get textToEncrypt$O() {
    return this.textToEncrypt$.asObservable()
  }
  get encryptedString$0() {
    return this.encryptedString$.asObservable()
  }
  get itsEncrypted$0() {
    return this.itsEncrypted$.asObservable()
  }

  // SETTER
  setTextToEncrypt(text: string) {
    this.textToEncrypt$.next(text);
  }
  setEncryptedString(text: string) {
    this.encryptedString$.next(text);
  }
  setItsEncrypted(value: boolean) {
    this.itsEncrypted$.next(value);
  }

  encrypt() {
    // Con variable normal
    this.encryptedString = '';
    let cantidad = this.textToEncrypt.length;
    // con observable
    this.setEncryptedString('');
    let cantidadDeVerdad: number = 0;
    this.textToEncrypt$O.subscribe(data => {
      return cantidadDeVerdad = data.length
    });
    console.log('anda? ', cantidadDeVerdad);
    // console.log('que mierda es esto: ', cantidad$?.source?.value);
    // let cantidadLength = cantidad$;

    // Con OBSERVABLES
    if (cantidadDeVerdad > 0) {
      if (this.itsEncrypted$0) {
        for (let i = 0; i < cantidadDeVerdad; i++) {
          switch (this.textToEncrypt[i]) {
            case 'a':
              if (this.textToEncrypt[i + 1] == 'i') {
                this.encryptedString += 'a';
                i += 1;
                break;
              } else {
                this.encryptedString += 'a';
                break;
              }
            case 'e':
              if (
                this.textToEncrypt[i + 1] == 'n' &&
                this.textToEncrypt[i + 2] == 't' &&
                this.textToEncrypt[i + 3] == 'e' &&
                this.textToEncrypt[i + 4] == 'r'
              ) {
                this.encryptedString += 'e';
                i += 4;
                break;
              } else {
                this.encryptedString += 'e';
                break;
              }
            case 'i':
              if (
                this.textToEncrypt[i + 1] == 'm' &&
                this.textToEncrypt[i + 2] == 'e' &&
                this.textToEncrypt[i + 3] == 's'
              ) {
                this.encryptedString += 'i';
                i += 3;
                break;
              } else {
                this.encryptedString += 'i';
                break;
              }
            case 'o':
              if (
                this.textToEncrypt[i + 1] == 'b' &&
                this.textToEncrypt[i + 2] == 'e' &&
                this.textToEncrypt[i + 3] == 'r'
              ) {
                this.encryptedString += 'o';
                i += 3;
                break;
              } else {
                this.encryptedString += 'o';
                break;
              }
            case 'u':
              if (
                this.textToEncrypt[i + 1] == 'f' &&
                this.textToEncrypt[i + 2] == 'a' &&
                this.textToEncrypt[i + 3] == 't'
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

    // Con variables normales
    // if (cantidad > 0) {
    //   if (this.itsEncrypted) {
    //     for (let i = 0; i < cantidad; i++) {
    //       switch (this.textToEncrypt[i]) {
    //         case 'a':
    //           if (this.textToEncrypt[i + 1] == 'i') {
    //             this.encryptedString += 'a';
    //             i += 1;
    //             break;
    //           } else {
    //             this.encryptedString += 'a';
    //             break;
    //           }
    //         case 'e':
    //           if (
    //             this.textToEncrypt[i + 1] == 'n' &&
    //             this.textToEncrypt[i + 2] == 't' &&
    //             this.textToEncrypt[i + 3] == 'e' &&
    //             this.textToEncrypt[i + 4] == 'r'
    //           ) {
    //             this.encryptedString += 'e';
    //             i += 4;
    //             break;
    //           } else {
    //             this.encryptedString += 'e';
    //             break;
    //           }
    //         case 'i':
    //           if (
    //             this.textToEncrypt[i + 1] == 'm' &&
    //             this.textToEncrypt[i + 2] == 'e' &&
    //             this.textToEncrypt[i + 3] == 's'
    //           ) {
    //             this.encryptedString += 'i';
    //             i += 3;
    //             break;
    //           } else {
    //             this.encryptedString += 'i';
    //             break;
    //           }
    //         case 'o':
    //           if (
    //             this.textToEncrypt[i + 1] == 'b' &&
    //             this.textToEncrypt[i + 2] == 'e' &&
    //             this.textToEncrypt[i + 3] == 'r'
    //           ) {
    //             this.encryptedString += 'o';
    //             i += 3;
    //             break;
    //           } else {
    //             this.encryptedString += 'o';
    //             break;
    //           }
    //         case 'u':
    //           if (
    //             this.textToEncrypt[i + 1] == 'f' &&
    //             this.textToEncrypt[i + 2] == 'a' &&
    //             this.textToEncrypt[i + 3] == 't'
    //           ) {
    //             this.encryptedString += 'u';
    //             i += 3;
    //             break;
    //           } else {
    //             this.encryptedString += 'u';
    //             break;
    //           }
    //         default:
    //           this.encryptedString += this.textToEncrypt[i];
    //           break;
    //       }
    //       console.log(this.textToEncrypt[i]);
    //     }
    //   } else {
    //     for (let i = 0; i < cantidad; i++) {
    //       switch (this.textToEncrypt[i]) {
    //         case 'a':
    //           this.encryptedString += 'ai';
    //           break;
    //         case 'e':
    //           this.encryptedString += 'enter';
    //           break;
    //         case 'i':
    //           this.encryptedString += 'imes';
    //           break;
    //         case 'o':
    //           this.encryptedString += 'ober';
    //           break;
    //         case 'u':
    //           this.encryptedString += 'ufat';
    //           break;
    //         default:
    //           this.encryptedString += this.textToEncrypt[i];
    //           break;
    //       }
    //       console.log(this.textToEncrypt[i]);
    //     }
    //   }
    // }
    // return console.log('texto encriptado ', this.encryptedString);
  // }

  itsAnEncryptedText() {
    let valor: string = '';
    this.textToEncrypt$.subscribe(data => {
      return valor = data;
    })
    console.log('VALOR: ', valor);
    if (
      valor.includes('ai') ||
      valor.includes('enter') ||
      valor.includes('imes') ||
      valor.includes('ober') ||
      valor.includes('ufat')) {
      return this.setItsEncrypted(true);
    } else {
      return this.setItsEncrypted(false);
    }
  }

  // decrypt() {
  //   this.setTextToEncrypt(this.textToEncrypt)
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
  // }
}
