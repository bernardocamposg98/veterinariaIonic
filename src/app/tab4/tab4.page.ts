import { Component, OnInit } from '@angular/core';
import { Mascota } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
 
  articles: Mascota;
  nombre: string;
  cel: string;
  mascota: string;
  raza: string;
  color: string;

  constructor(private mascotaCRUD: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.mascotaCRUD.traerMascotas()
    .subscribe(metodo => {
      console.log(metodo);
      this.articles = metodo;
    });
  }

  reload() {
    window.location.reload();
  }

  agregarMascota() {
    this.mascotaCRUD.agregarMascota(this.nombre, this.cel, this.mascota, this.raza, this.color).subscribe(this.reload);
  }

  eliminarMascota(id: number) {
    console.log(id);
    this.mascotaCRUD.eliminarMascota(id).subscribe(this.reload);
  }

  async editarMascota(editValor: number, nombre: string, cel: string, mascota: string, raza: string) {
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
        name: 'cel',
        type: 'text',
        placeholder: 'Escriba la descripción',
        value: cel
      },
      {
        name: 'mascota',
        type: 'text',
        placeholder: 'Escriba la mascota',
        value: mascota
      },
      {
        name: 'raza',
        type: 'text',
        placeholder: 'Escriba el raza',
        value: raza
      },
      {
        name: 'color',
        type: 'text',
        placeholder: 'Escriba el color',
        value: raza
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
            this.mascotaCRUD.editarMascota(editValor, datos.Nombre, datos.cel, datos.mascota, datos.raza, datos.color).subscribe(this.reload);
            console.log('Se acepto la acción');
          }
        }
      ]
    });
    await alertInput.present();
  }

}
