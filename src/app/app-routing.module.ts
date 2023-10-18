import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthComponent } from './month/month.component';
import { ReminderComponent } from './reminder/reminder.component';


const routes: Routes = [
      {path: '', component: MonthComponent},
      {path: 'reminder/:item.id', component: ReminderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const appRoutes: Routes = [];
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(appRoutes)]
// });