import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPage } from '../pages/main/main';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { Login } from '../pages/login/login';
import { BulkPage } from '../pages/bulk/bulk';
import { DispatchPage } from '../pages/dispatch/dispatch';
import { HistoryPage } from '../pages/history/history';
import { RatePage } from '../pages/rate/rate';
import { PickupPage } from '../pages/pickup/pickup';
import { RemitPage } from '../pages/remit/remit';
import { OwingPage } from '../pages/owing/owing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    Login,
    MainPage,
    BulkPage,
    DispatchPage,
    HistoryPage,
    RatePage,
    PickupPage,
    RemitPage,
    OwingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    Login,
    MainPage,
    BulkPage,
    DispatchPage,
    HistoryPage,
    RatePage,
    PickupPage,
    RemitPage,
    OwingPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
