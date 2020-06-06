import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}


@NgModule({
  imports:      [  FormsModule,
    AppRoutingModule,BrowserAnimationsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class AppModule { }