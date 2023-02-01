import { Component } from '@angular/core';
import { EncryptorService } from 'src/app/services/encryptor.service';

@Component({
  selector: 'app-output-box',
  templateUrl: './output-box.component.html',
  styleUrls: ['./output-box.component.css']
})
export class OutputBoxComponent {
  constructor(public encryptorService: EncryptorService) {}
}
