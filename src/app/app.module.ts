import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { RouterModule } from '@angular/router';
import { ReminderComponent } from './reminder/reminder.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    ReminderComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: MonthComponent},
      {path: 'reminder', component: ReminderComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
