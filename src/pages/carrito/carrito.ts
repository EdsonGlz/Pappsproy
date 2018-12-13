import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {
  carrito;
  producto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrito = this.navParams.get("carrito");
    this.producto = this.navParams.get("producto");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

}
