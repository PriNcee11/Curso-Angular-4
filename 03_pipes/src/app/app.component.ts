import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "Iván";
  nombre2 = "iVán maRtín valdeRAS";

  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a:number = 0.234;

  salario = 1.2345;

  heroe = {
    nombre: "Peter Quill",
    clave: "Star Lord",
    edad: 35,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {
  
    setTimeout( ()=>resolve('Llegó la Data !!'), 3500 );

  })

  fecha = new Date();

  video = "3K0RzZGpyds";

  activar:boolean = true;

}
