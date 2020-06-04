import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BlankComponent } from './views/blank/blank.component';
import { OneComponent } from './views/one/one.component';
import { TwoComponent } from './views/two/two.component';
import { QuestionComponent } from './views/question/question.component';
import { TimerComponent } from './views/timer/timer.component';
//import { CatalogViewComponent } from './views/catalog/catalog.component';



@NgModule({
  declarations: [ BlankComponent,
    OneComponent
     ,TwoComponent,QuestionComponent,TimerComponent
     //, CatalogViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: BlankComponent },
      { path: 'blank', component: BlankComponent },
      { path: 'one', component: OneComponent },
      { path: 'two', component: TwoComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'timer', component: TimerComponent },
      { path: '**', redirectTo: 'blank' }
      //{ path: 'catalog', component: CatalogViewComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


