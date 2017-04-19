import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EscherMapComponent } from './components/escher-map/escher-map.component';

import {DataLoader} from './services/data-loader.service';
import { NodesTypeListComponent } from './components/nodes-type-list/nodes-type-list.component';
import { GenesListComponent } from './components/genes-list/genes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EscherMapComponent,
    NodesTypeListComponent,
    GenesListComponent,
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
