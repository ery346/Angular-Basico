import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class listadoComponent {

  personajes: string[] = ['Goku', 'Krilin', 'Gohan', 'Vegetta', 'Picoro', 'Cel'];
 
  personajBorrado: string = '';


  borrarPersonaje(){
    
    this.personajBorrado = this.personajes.shift() || '';
  
  }
}
