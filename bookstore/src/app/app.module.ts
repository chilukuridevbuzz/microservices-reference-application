import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';

import { rootRouterConfig } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';
import { ShopModule } from './shop/shop.module';

import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    StarRatingModule.forRoot(),
    MatInputModule,
    SharedModule,
    ShopModule
  ],
  providers: [
    // ANGULAR MATERIAL SLIDER FIX
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
