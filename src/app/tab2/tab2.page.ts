import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  articles: Producto;
  nombre: string;
  descripcion: string;
  cantidad: string;
  costo: string; 

  constructor(private productoCRUD: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.productoCRUD.traerProductos()
    .subscribe(metodo => {
      console.log(metodo);
      this.articles = metodo;
    });
  }

  reload() {
    window.location.reload();
  }

  agregarProducto() {
    this.productoCRUD.agregarProducto(this.nombre, this.descripcion, this.cantidad, this.costo).subscribe(this.reload);
  }

  eliminarProducto(id: number) {
    console.log(id);
    this.productoCRUD.eliminarProducto(id).subscribe(this.reload);
  }

  async editarProducto(editValor: number, nombre: string, descripcion: string, cantidad: string, costo: string) {
    const alertInput = await this.alertCtrl.create({
      header: 'Editar Personal',
      message: 'Llene los campos',
      inputs: [{
        name: 'Nombre',
        type: 'text',
        placeholder: 'Escriba el nombre',
        value: nombre
      },
      {
        name: 'descripcion',
        type: 'text',
        placeholder: 'Escriba la descripción',
        value: descripcion
      },
      {
        name: 'cantidad',
        type: 'text',
        placeholder: 'Escriba la cantidad',
        value: cantidad
      },
      {
        name: 'costo',
        type: 'text',
        placeholder: 'Escriba el costo',
        value: costo
      }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Se cancelo la acción');
          }
        }, {
          text: 'Aceptar',
          handler: (datos) => {
            this.productoCRUD.editarProducto(editValor, datos.Nombre, datos.descripcion, datos.cantidad, datos.costo).subscribe(this.reload);
            console.log('Se acepto la acción');
          }
        }
      ]
    });
    await alertInput.present();
  }

}
