import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWomanFormComponent } from './components/forms/add-woman-form/add-woman-form.component';
import { LogInFormComponent } from './components/forms/log-in-form/log-in-form.component';
import { HomeComponent } from './pages/home/home.component';
import { WomenListComponent } from './pages/women-list/women-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'womenWhoChangedThe', pathMatch: 'prefix' },
  // {
  //   path: 'womenWhoChangedThe',
  //   component: HomeComponent,
  // },
  {
    path: 'forms/logIn',
    component: LogInFormComponent,
  },
  {
    path: 'forms/addWoman',
    component: AddWomanFormComponent,
  },
  {
    path: 'womenList',
    component: WomenListComponent,
  },
  // {
  //   path: 'forms/editWoman/:currentUser',
  //   component: AddWomanFormComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
