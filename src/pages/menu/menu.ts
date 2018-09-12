import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  currentNumber:number = 1;
  private listItems: any;
  keylat: string ='lat';
  keylng: string ='lng';
  keyimg: string ="img";

  img: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.img= navParams.get('img');
      this.listItems = [{

      }]
  }
  detalle(){
    this.navCtrl.push(DetallePage)
  }

agregarFoto():void {

  this.listItems.push({
    name: "Foto "+ this.currentNumber++
  })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
