import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { OutputBoxComponent } from './components/output-box/output-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonBoxComponent } from './components/button-box/button-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InputBoxComponent,
    OutputBoxComponent,
    ButtonBoxComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
