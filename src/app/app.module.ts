import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EscherMapComponent } from './escher-map/escher-map.component';

import {DataLoader} from './data-loader.service';
import { NodesTypeListComponent } from './nodes-type-list/nodes-type-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EscherMapComponent,
    NodesTypeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataLoader],
  bootstrap: [AppComponent]
})
export class AppModule { }
