import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilteredServersPipe } from './pipes/filter-users.pipe';
import { LogInFormComponent } from './components/forms/log-in-form/log-in-form.component';
import { AddWomanFormComponent } from './components/forms/add-woman-form/add-woman-form.component';
import { WomenListComponent } from './pages/women-list/women-list.component';
import { SingleWomanCardComponent } from './pages/women-list/single-woman-card/single-woman-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilteredServersPipe,
    LogInFormComponent,
    AddWomanFormComponent,
    WomenListComponent,
    SingleWomanCardComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
