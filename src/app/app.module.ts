import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {MenuPage } from '../pages/menu/menu';
import {DetallePage } from '../pages/detalle/detalle';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GoogleMapComponent } from '../components/google-map/google-map'; 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
