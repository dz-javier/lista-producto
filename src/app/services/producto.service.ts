import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
  
export class ProductoService {
  private productos : Array<Producto> = [
    {
    "id": "1",
    "nombre": "Celular",
    "precio": 1500,
    "stock" : 10,
     "imagen" :  "http://ingenieria.uner.edu.ar/referencia/imagenes/logo_ingenieria.png"
  },
  {
    "id": "2",
    "nombre": "Tablet",
    "precio": 3000,
    "stock" : 25,
    "imagen" :  "http://ingenieria.uner.edu.ar/referencia/imagenes/logo_ingenieria.png"
  },

  {
    "id": "3",
    "nombre": "Tv",
    "precio": 10000,
    "stock" : 0,
    "imagen" :  "http://ingenieria.uner.edu.ar/referencia/imagenes/logo_ingenieria.png"
  }
  ];

  constructor() { }
  public obtenerTodos() { 
    return this.productos;
  }
  public obtenerPorId(id: string) { 
    for (let prod of this.productos) { 
      if (prod.id == id)
        return (prod)
    }
  }
  public agregar(prod: Producto) { 
    this.productos.push(prod);
  }
}
