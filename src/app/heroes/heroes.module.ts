import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { heroeComponent } from './heroe/heroe.component';
import { listadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        heroeComponent,
        listadoComponent
    ],
    exports: [
        listadoComponent,
        heroeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class heroesModule {}