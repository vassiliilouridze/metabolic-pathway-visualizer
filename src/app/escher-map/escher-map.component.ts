import { Component, DoCheck } from '@angular/core';
import {DataLoader} from '../data-loader.service';
import { GeneType } from '../models/gene-type';
import * as d3 from 'd3';

@Component({
  selector: 'escher-map-component',
  templateUrl: './escher-map.component.html',
  styleUrls: ['./escher-map.component.css']
})
export class EscherMapComponent implements DoCheck {

  escherMap:any;
  file: any;
  map_id:string = null;
  selectedPathway:string;

  constructor(private dataLoader: DataLoader) { }

  ngDoCheck() {
    if(this.selectedPathway != this.dataLoader.selectedPathway){
      this.selectedPathway = this.dataLoader.selectedPathway;
    }
  }

  async readFile() {
    this.file = (<HTMLInputElement>document.getElementById("file")).files[0];
    await this.dataLoader.getFile(this.file);
  }
}
