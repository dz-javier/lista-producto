import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  private productos;
  private carrito: Array<Producto>;
  private cantidad = 0;
  
  constructor(private prodSrv: ProductoService,
              private alertcontroller: AlertController,
              private loadingController: LoadingController) {
              this.carrito = this.prodSrv.carrito;
  
       
  }
  public async ngOnInit() { 
    const loading = await this.loadingController.create();
    await loading.present();
    this.prodSrv.obtenerTodos().subscribe(datos => {
       this.productos = datos;
      loading.dismiss();
      });
     
 
  }
  public async verCarrito() { 
    // promesa: es como el suscribe, se resuelve en otro momento
    // async 
    // await espera que se resuelva la promesa, en el primer caso espera el create. esta palabra se puede usar en métodos async
    // create: devuelve una promesa, relacionada al método then() 
    
    const alert = await this.alertcontroller.create({
      // este json puede tener varias cosas
      header: "Carrito",
      subHeader: this.carrito.length + "productos en el carrito",
      message: "El total es $" + this.prodSrv.sumarCarrito(), // ver tema de 
      buttons: ["OK", "Cancel"]
    });
    await alert.present(); // aquí también se usa await porque es una promesa 
  }
  public getTotalCarrito() {
    
    this.verCarrito();
    //alert("El total es: $" + this.prodSrv.sumarCarrito());

  }
}
