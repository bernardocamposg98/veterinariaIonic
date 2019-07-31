import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
 
  articles: Sucursal;
  nombre: string;
  estado: string;
  direccion: string;
  gerente: string;
  cel: string;

  constructor(private sucursalCRUD: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.sucursalCRUD.traerSucursales()
    .subscribe(metodo => {
      console.log(metodo);
      this.articles = metodo;
    });
  }

  reload() {
    window.location.reload();
  }

  agregarSucursal() {
    this.sucursalCRUD.agregarSucursal(this.nombre, this.estado, this.direccion, this.gerente, this.cel).subscribe(this.reload);
  }

  eliminarSucursal(id: number) {
    console.log(id);
    this.sucursalCRUD.eliminarSucursal(id).subscribe(this.reload);
  }

  async editarSucursal(editValor: number, nombre: string, estado: string, direccion: string, gerente: string) {
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
        name: 'estado',
        type: 'text',
        placeholder: 'Escriba la descripción',
        value: estado
      },
      {
        name: 'direccion',
        type: 'text',
        placeholder: 'Escriba la direccion',
        value: direccion
      },
      {
        name: 'gerente',
        type: 'text',
        placeholder: 'Escriba el gerente',
        value: gerente
      },
      {
        name: 'cel',
        type: 'text',
        placeholder: 'Escriba el cel',
        value: gerente
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
            this.sucursalCRUD.editarSucursal(editValor, datos.Nombre, datos.estado, datos.direccion, datos.gerente, datos.cel).subscribe(this.reload);
            console.log('Se acepto la acción');
          }
        }
      ]
    });
    await alertInput.present();
  }

}
