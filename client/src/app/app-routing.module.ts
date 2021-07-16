import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'womenWhoChangedThe', pathMatch: 'prefix' },
  // {
  //   path: 'womenWhoChangedThe',
  //   component: HomeComponent,
  // },

  {
    path: 'tasksList',
    component: TasksListComponent,
  },
  {
    path: 'addTask',
    component: AddTaskFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
