import { Component, OnInit } from '@angular/core';
import { Medicina } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  articles: Medicina;
  nombre: string;
  descripcion: string;
  cantidad: string;
  costo: string;

  constructor(private medicinasCRUD: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.medicinasCRUD.traerMedicinas()
    .subscribe(metodo => {
      console.log(metodo);
      this.articles = metodo;
    });
  }

  reload() {
    window.location.reload();
  }

  agregarMedicina() {
    this.medicinasCRUD.agregarMedicina(this.nombre, this.descripcion, this.cantidad, this.costo).subscribe(this.reload);
  }

  eliminarMedicina(id: number) {
    console.log(id);
    this.medicinasCRUD.eliminarMedicina(id).subscribe(this.reload);
  }

  async editarMedicina(editValor: number, nombre: string, descripcion: string, cantidad: string, costo: string) {
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
            this.medicinasCRUD.editarMedicina(editValor, datos.Nombre, datos.descripcion, datos.cantidad, datos.costo).subscribe(this.reload);
            console.log('Se acepto la acción');
          }
        }
      ]
    });
    await alertInput.present();
  }

}
