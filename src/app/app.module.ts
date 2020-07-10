import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG ,HammerModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BlankComponent } from './views/blank/blank.component';
import { OneComponent } from './views/one/one.component';
import { TwoComponent } from './views/two/two.component';
import { QuestionComponent } from './views/question/question.component';
import { TimerComponent } from './views/timer/timer.component';
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}


@NgModule({
  imports:      [  FormsModule,BrowserAnimationsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,AngularFirestoreModule,HammerModule],
  declarations: [ AppComponent,BlankComponent,
    OneComponent
     ,TwoComponent,QuestionComponent,TimerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ]
},
exports:[AppComponent]
)
export class SwipeModule { }