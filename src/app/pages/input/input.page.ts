import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario = {
    nombre:'',
    apellido:'',
    genero:'',
    fecha:'',
    email:'',
    password:'',
    password2:'',
    
  }


  constructor(public alertController: AlertController) { }

  showAlert() {

    this.alertController.create({
      header: 'Tu cuenta ha sido creada.',
      subHeader: 'Se ha enviado la información a tu correo.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }



  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  

}

