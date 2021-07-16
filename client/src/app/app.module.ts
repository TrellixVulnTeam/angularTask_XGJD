import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksListComponent,
    AddTaskFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
