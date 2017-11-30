import { Component, OnInit } from '@angular/core';

//  <p [ngStyle]="{'font-size': tamanio + 'px'}">
//  <p [style.fontSize]="'40px'">
//  <p [style.fontSize.px]="tamanio">
@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamanio + 'px'}">
      Hola Mundo
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio = 20;

  constructor() { }

  ngOnInit() {
  }

}
