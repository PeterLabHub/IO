import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//http
import { HttpClientModule } from '@angular/common/http';

//NgZorroAntdMobile
import { NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';

import { ElModule } from 'element-angular'
import { BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, HttpClientModule,
    NgZorroAntdMobileModule,ElModule,BrowserAnimationsModule,NoopAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
