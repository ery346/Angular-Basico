import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class heroeComponent{

    nombre: string = 'IronMan';
    edad: number = 45;

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    get nombreEnMayusculas(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): string{

        return this.nombre = 'Spiderman';
    }

    cambiarEdad(): number {
        return this.edad = 17;
    }
}