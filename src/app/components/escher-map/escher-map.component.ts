import { Component, DoCheck } from '@angular/core';
import {DataLoader} from '../../services/data-loader.service';
import * as d3 from 'd3';

@Component({
  selector: 'escher-map-component',
  templateUrl: './escher-map.component.html',
  styleUrls: ['./escher-map.component.css']
})
export class EscherMapComponent implements DoCheck {

  escherMap:any;
  file: any = null;
  selectedPathway:string;
  selectedButton:number;

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

  changePathwayColor(newValue:number){
    this.selectedButton = newValue;
    var selection = d3.selectAll('path.segment')

    if(newValue == 1){
      selection.style("stroke", "#334E75");
    }
    if(newValue == 2){
      selection.style("stroke", "green");
    }

  }
}
