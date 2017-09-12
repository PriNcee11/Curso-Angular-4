import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Lista, ListaItem } from "../../app/clases/index";

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

    i: number;
    lista: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public _listaDeseos: ListaDeseosService,
        public alertCtrl: AlertController
    ) { 
        this.i = this.navParams.get("i");
        this.lista = this.navParams.get("lista");
     }

    ngOnInit() { }

    actualizar( item:ListaItem ){
        item.completado = !item.completado;

        let todosMarcados = true;
        for( let item of this.lista.items ){
            if( !item.completado ){
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;

        this._listaDeseos.actualizarData();
    }

    borrarItem() {
        let confirm = this.alertCtrl.create({
          title: this.lista.nombre,
          message: 'Se borrará permanentemente y no se podrá recuperar, ¿seguro?',
          buttons: ['cancelar',
            {
              text: 'Borrar',
              handler: () => {
                this._listaDeseos.eliminarLista(this.i);
                this.navCtrl.pop();
              }
            }
          ]
        });
        confirm.present();
    }
}