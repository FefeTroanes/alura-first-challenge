import { Component, OnInit } from '@angular/core';

import { EncryptorService } from 'src/app/services/encryptor.service';
@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent implements OnInit {

  constructor(private encryptorService: EncryptorService) {}

  ngOnInit(): void {
    // this.encryptorService.disparadorDelInput.subscribe(
    //   data => {
    //     this.encryptorService.textToEncrypt = data;
    //   }
    // );
  }

  consologuear() {
    console.log('textToEncrypt ', this.encryptorService.textToEncrypt);
  }
}
