import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private productos = [
    {
    "id": 1,
    "nombre": "Celular",
    "precio": 1500,
    "stock" : 10,
    "cantidad": 1500,
    "imagen" :  "http://ingenieria.uner.edu.ar/referencia/imagenes/logo_ingenieria.png"
  },
  {
    "id": 2,
    "nombre": "Tablet",
    "precio": 3000,
    "stock" : 25,
    "cantidad": 3000,
    "imagen" :  "http://ingenieria.uner.edu.ar/referencia/imagenes/logo_ingenieria.png"
  },

  {
    "id": 3,
    "nombre": "Tv",
    "precio": 10000,
    "stock" : 0,
    "cantidad": 3000,
    "imagen" :  "http://ingenieria.uner.edu.ar/referencia/imagenes/logo_ingenieria.png"
  }
  ];

    constructor() {

    
  }

}
