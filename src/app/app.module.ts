import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentListComponent } from './continent-list/continent-list.component';
// import { ContinentsComponent } from './home/continents/continents.component';

@NgModule({
  declarations: [AppComponent, ContinentListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
