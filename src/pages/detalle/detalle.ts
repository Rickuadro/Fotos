import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  keylat: string ='lat';
  keylng: string ='lng';
  keyimg: string ="img";
  keyfoto: string ="foto";
  keylista:string ="lista";
  img: string;
  lat: number;
  lng: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
      this.img=navParams.get('img');
      this.lat=navParams.get('lat');
      this.lng=navParams.get('lng');
      
  }
  loadDataDetalle(){
    this.storage.get(this.keylat).then((val) => {
      console.log('lat: ', val);
    }); 
    this.storage.get(this.keylng).then((val) => {
      console.log('lng: ', val);
    });
    this.storage.get(this.keyimg).then((val) => {
      console.log('img: ', val);
    });
    this.storage.get(this.keyfoto).then((val) => {
      console.log('foto: ', val);
    });
    this.storage.get(this.keylista).then((val) => {
      console.log('lista: ', val);
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
