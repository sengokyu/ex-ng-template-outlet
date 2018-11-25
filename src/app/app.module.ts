import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [AppComponent, Item1Component, Item2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
