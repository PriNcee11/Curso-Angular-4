import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform( value: string, todas:boolean = true ): string {
    /* transform( value: string, ...args: any[] ): string { */ /* ... operador "rest" para que lleguen los args como array */
    /* transform( value: string, args1, args2, args3 ): string { */

        value = value.toLocaleLowerCase();
        let nombres = value.split(" ");
        
        if(todas) {
            for(let i in nombres){
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }


        return nombres.join(" ");

    }
}