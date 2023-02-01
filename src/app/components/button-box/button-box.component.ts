import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { EncryptorService } from 'src/app/services/encryptor.service';
@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent implements OnInit {

  constructor(public encryptorService: EncryptorService) {}

  ngOnInit(): void {
    // this.encryptorService.disparadorDelInput.subscribe(
      //   data => {
        //     this.encryptorService.textToEncrypt = data;
        //   }
        // );
      }
      
      // La letra "a" es convertida para "ai"
      // La letra "e" es convertida para "enter"
      // La letra "i" es convertida para "imes"
      // La letra "o" es convertida para "ober"
      // La letra "u" es convertida para "ufat"
      
  // recorrerElString() {
  //   let textToEncrypt = this.encryptorService.textToEncrypt;
  //   let encryptedString: string = '';
  //   let cantidad = textToEncrypt.length;
  //   if (cantidad > 0) {
  //     for (let i = 0; i < cantidad; i++) {
  //       switch (textToEncrypt[i]) {
  //         case 'a':
  //           encryptedString += 'ai';
  //           break;
  //         case 'e':
  //           encryptedString += 'enter';
  //           break;
  //         case 'i':
  //           encryptedString += 'imes';
  //           break;
  //         case 'o':
  //           encryptedString += 'ober';
  //           break;
  //         case 'u':
  //           encryptedString += 'ufat';
  //           break;
  //         default:
  //           encryptedString += 'caca';
  //           break;
  //       }
  //       console.log(textToEncrypt[i]);
  //     }
  //   }
  //   // return console.log('texto encriptado ', encryptedString);
  //   // return console.log('string ', cantidad);
  //   return encryptedString;
  // }
}
