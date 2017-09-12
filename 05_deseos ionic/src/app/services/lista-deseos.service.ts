import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';


@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() {
        this.cargarData();
        console.log("Servicio inicializado");
    }

    actualizarData(){
        localStorage.setItem( "data", JSON.stringify(this.listas) );
    }

    cargarData(){
        if( localStorage.getItem("data") ){ /* Si no hay data devuelve un null y falla el this.listas.push() */
            this.listas = JSON.parse(localStorage.getItem("data"));            
        }
    }

    agregarLista( lista:Lista ){
        this.listas.push(lista);
        this.actualizarData();
    }

   eliminarLista( i:number ){
        this.listas.splice(i, 1);
        this.actualizarData();
    }
}