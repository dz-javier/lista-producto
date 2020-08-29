import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private productos;

     constructor(private prodSrv:ProductoService) {

       let prod = new Producto();
       prod.id = "4";
       prod.stock = 10;
       prod.nombre = "led"
       prod.precio = 1000;
       prod.imagen = "none";
       //this.prodSrv.agregar(prod);
       this.productos = prodSrv.obtenerTodos();
  }

}
