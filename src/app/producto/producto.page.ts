import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
// implements implementa una interfaz, implementa ngOnInit()
export class ProductoPage implements OnInit {
  private producto;// = new Producto();
  // inyección de dependencias los objetos son singleton ahorra ram en usuarios
  constructor(private activateRoute: ActivatedRoute,private prodSrv:ProductoService) { }

  
 // primer método que se ejecuta antes de presentar la pantalla
  ngOnInit() {
    // paramMap patron Observer, lo que está en el parámetro de subscribe sucede después de este método
    // JavaScrip concepto síncrono y asíncrono
    // => resumen de armar una función, como una función lambda
    this.activateRoute.paramMap.subscribe(
      paramMap => {
        this.producto = this.prodSrv.obtenerPorId(paramMap.get("id"))
          .subscribe(datos => {
            this.producto = datos;
          });
        
      });
  }
  
  public agregarCarrito(): void { 
    this.prodSrv.carrito.push(this.producto); 
  }
}
