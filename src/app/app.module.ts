import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { RouterModule } from '@angular/router';
import { ReminderComponent } from './reminder/reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
    ])
  ],
  providers: [
      // provideRouter(appRoutes, withComponentInputBinding()), 
  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }

// const appRoutes: Routes = [];
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(appRoutes)]
// });