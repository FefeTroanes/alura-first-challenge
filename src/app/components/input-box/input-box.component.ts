import { Component, OnInit } from '@angular/core';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { EncryptorService } from 'src/app/services/encryptor.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  faCircleExclamation = faCircleExclamation;

  inputForm: FormGroup = new FormGroup({});

  // textoDelInput: string = '';


  constructor(
    //TODO: CAMBIAR EL PUBLIC DE ABAJO POR PRIVATE
    public encryptorService: EncryptorService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Valido que el input solo sea de letras minusculas y sin acentos
    this.inputForm = this.formBuilder.group(
      {
        inputedText: ['', Validators.pattern('[a-z+ñ+ +.+,+-+_+¿+?+¡+!+]*')]
      }
    )

    // Mando el valor del inputedText al textToEncrypt del servicio (STRING)
    this.inputForm.valueChanges.subscribe((data) => {
      this.encryptorService.textToEncrypt = data.inputedText;
      console.log('data: ', data);
    })
  }


  //Getter del input para agregar un p diciendo que esta haciendo cagada en el caso de que tenga errores de validacion
  get inputedText() {
    return this.inputForm.get('inputedText');
  }

}

