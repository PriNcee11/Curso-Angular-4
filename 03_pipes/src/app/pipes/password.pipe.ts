import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(nombre: string, activar:boolean): string {

    if(activar){
      let nNombre:string = "";
      for(let i = 0; i<nombre.length; i++){
        nNombre += '*';
      }

      return nNombre;

    } else {

      return nombre;
    }
    
  }

}
