import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA0flPkkZVE87aXWnDqlekPv7_ROolFE3Q",
  authDomain: "crudexample-b35e3.firebaseapp.com",
  databaseURL: "https://crudexample-b35e3.firebaseio.com",
  projectId: "crudexample-b35e3",
  storageBucket: "crudexample-b35e3.appspot.com",
  messagingSenderId: "601178340909"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
