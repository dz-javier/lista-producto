import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
  
export class ProductoService {
  public carrito: Array<Producto> = [];
  private path = "http://192.168.1.59:3000";
  constructor(private httpClient:HttpClient)   { }
  
  
  public obtenerTodos() {

      return this.httpClient.get<Producto[]>(this.path + "/productos");
  
  }
  
  public obtenerPorId(id: string) {
    return this.httpClient.get<Producto[]>(this.path + "/productos/"+id);

   /* for (let prod of this.productos) { 
      if (prod.id == id)
        return (prod)
    }*/
  }
  public agregarProducto(prod: Producto) { 
  //  this.productos.push(prod);
  // es necesario hacer return ?
    return this.httpClient.post(this.path + "/productos/", prod);
  }
  public deleteProducto(prod: Producto) { 
   // alert(this.path + "/productos/" + prod.id);
    return this.httpClient.delete(this.path + "/productos/" + prod.id);

  }

  public getCarrito(){ 
    return this.carrito;
  }

  public sumarCarrito() {
    let total = 0;
    for (let prod of this.carrito) {
      total = total + prod.precio;
    
    }
    return total;
  }
}
