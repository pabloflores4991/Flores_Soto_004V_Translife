import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  componentes: Componente[] =[
    {
      icon: 'beer',
      name: 'cerveza',
      redirectTo:'/alert'
    },
    {
      icon: 'beer',
      name: 'cerveza',
      redirectTo:'/action-sheet'
    },
    {
      icon: 'beer',
      name: 'input',
      redirectTo:'/input'
    },
    {
      icon: 'beer',
      name: 'autos',
      redirectTo:'/autos'
    },
    {
      icon: 'beer',
      name: 'input',
      redirectTo:'/input'
    }
    
  ]

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
