import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoPageModule } from '../producto/producto.module';
import { ProductoPage } from '../producto/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prod = ProductoPage;

  Productos = [
    {id: 0,color: "white", Producto: "Zapatos de Futbol",precio: "$1500", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/ZapatosdeFutbol.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro", texto:"" }]},
    {id: 1,color: "white", Producto: "Camisa Deportiva",precio: "$600",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4 ],imagen: "../assets/imgs/Camisa.jpg", numero: "(871) 178 5027"},
    {id: 2,color: "white", Producto: "Mochila deportiva",precio: "$500",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3,],imagen: "../assets/imgs/Mochila.jfif", numero: "(871) 178 5027"},
    {id: 3,color: "white", Producto: "Espinilleras",precio: "$200",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Espinilleras.jpg", numero: "(871) 178 5027"},
  ];

  constructor(public navCtrl: NavController) {

    }

    clickProducto(p){
      this.navCtrl.push(this.prod, {producto: p});
    }


}
