import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'earth-outline',
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'leaf-outline',
      name: '¿Qué es el Co2?', 
      redirecTo: '/contaminacion'
    },
    {
      icon: 'car-sport-outline', 
      name: 'Modelos de autos', 
      redirecTo: '/autos'
    },
    {
      icon: 'log-in-outline', 
      name: 'Inicio sesión', 
      redirecTo: '/login'
    },
    
  ]
}