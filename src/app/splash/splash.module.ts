import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';

import { SplashPage } from './splash.page';

@NgModule({
  imports: [
    IonicModule,
    SplashPageRoutingModule
  ],
  declarations: [SplashPage]
})
export class SplashPageModule {}
