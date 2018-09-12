import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})

export class GoogleMapComponent {
  @ViewChild("map") mapElement;
map: any;
lat: number;
lng: number;
constructor(public navCtrl: NavController,
  public navParams: NavParams) {
   this.lat= navParams.get('lat');
   this.lng= navParams.get('lng');

}
ngOnInit(){
  this.initMap();
}
initMap(){
  
  let coords = new google.maps.LatLng(this.lat,this.lng);
  let mapOptions: google.maps.MapOptions = {
    center: coords,
    zoom:11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map=new google.maps.Map(this.mapElement.nativeElement,
  mapOptions)

  let marker:google.maps.Marker = new google.maps.Marker({
    map: this.map,
    position: coords
  })
}
}
