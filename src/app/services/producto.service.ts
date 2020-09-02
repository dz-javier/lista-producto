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
     "imagen" :  "https://dummyimage.com/200/857b85/0011ff.png&text=Un+celular+copado"
  },
  {
    "id": "2",
    "nombre": "Tablet",
    "precio": 3000,
    "stock" : 25,
    "imagen" :  "https://dummyimage.com/250/857b85/0011ff.png&text=La+Tableta!"
  },

  {
    "id": "3",
    "nombre": "TV Smart",
    "precio": 10000,
    "stock" : 5,
    "imagen" :  "https://dummyimage.com/250/857b85/0011ff.png&text=La+tele"
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
