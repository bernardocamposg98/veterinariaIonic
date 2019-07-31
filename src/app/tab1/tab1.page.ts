import { Component, OnInit } from '@angular/core';
import { Empleado } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  articles: Empleado;
  nombre: string;
  cel: string;
  correo: string;
  puesto: string;

  constructor(private empleadoCRUD: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.empleadoCRUD.traerEmpleados()
    .subscribe(metodo => {
      console.log(metodo);
      this.articles = metodo;
    });
  }

  reload() {
    window.location.reload();
  }

  agregarEmpleado() {
    this.empleadoCRUD.agregarEmpleado(this.nombre, this.cel, this.correo, this.puesto).subscribe(this.reload);
  }

  eliminarEmpleado(id: number) {
    console.log(id);
    this.empleadoCRUD.eliminarEmpleado(id).subscribe(this.reload);
  }

  async editarEmpleado(editValor: number, nombre: string, cel: string, correo: string, puesto: string) {
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
        name: 'Cel',
        type: 'text',
        placeholder: 'Escriba el celular',
        value: cel
      },
      {
        name: 'Correo',
        type: 'text',
        placeholder: 'Escriba el correo',
        value: correo
      },
      {
        name: 'Puesto',
        type: 'text',
        placeholder: 'Escriba el puesto',
        value: puesto
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
            this.empleadoCRUD.editarEmpleado(editValor, datos.Nombre, datos.Cel, datos.Correo, datos.Puesto).subscribe(this.reload);
            console.log('Se acepto la acción');
          }
        }
      ]
    });
    await alertInput.present();
  }
}
