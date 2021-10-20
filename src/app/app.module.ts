import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { heroesModule } from './heroes/heroes.module';
import { contadormodule } from './contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadormodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
