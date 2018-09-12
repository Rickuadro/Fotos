import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { MenuPage } from '../menu/menu';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base64Image: any;
  lat: any;
  lng: any;
  stNumber:any;
  keylat: string ='lat';
  keylng: string ='lng';
  keyimg: string ="img";
  keyfoto: string ="foto";
  keylista:string ="lista";
  currentNumber:number = 1;
  private listItems: any;

  constructor(public navCtrl: NavController,  
  private camera:Camera,
  public geoposition: Geolocation,
  private storage: Storage) {
    this.listItems = [{

    }]
  }
  ionViewWillLeave(){
    this.storage.set(this.keylista, this.listItems);
    this.storage.set(this.keyfoto, this.currentNumber);
    this.storage.set(this.keylat, this.lat);
    this.storage.set(this.keylng, this.lng);
    this.storage.set(this.keyimg, this.base64Image);
  }
  agregarFoto():void {

    this.listItems.push({
      lat:this.lat,
  lng:this.lng,
  img:this.base64Image,
      name: "Foto "+ this.currentNumber++
      
    })
    }
menuFotos(){
this.navCtrl.push(MenuPage,{
  lat:this.lat,
  lng:this.lng,
  img:this.base64Image
})
}
menuDetalle(){
  this.navCtrl.push(DetallePage,{
    lat:this.lat,
    lng:this.lng,
    img:this.base64Image
  })
  }
  
/*saveData(){
    this.storage.set(this.keylista, this.listItems);
    this.storage.set(this.keyfoto, this.currentNumber);
    this.storage.set(this.keylat, this.lat);
    this.storage.set(this.keylng, this.lng);
    this.storage.set(this.keyimg, this.base64Image);
  
  
  
}*/



locationPhoto(){
   
  this.geoposition.getCurrentPosition().then( pos => {
    
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    
  
   
  }).catch( err => console.log(err));
    }
    
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      
    }
    
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  this.locationPhoto();
  }
}
 /* menuFoto(){
    this.navCtrl.push(MenufotoPage,{
      lat:this.lat,
      lng:this.lng,
      img:this.base64Image
    });
  }*/
  
  

