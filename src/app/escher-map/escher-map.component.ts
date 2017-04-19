import { Component, OnInit, DoCheck } from '@angular/core';
import {DataLoader} from '../data-loader.service';
import { GeneType } from '../models/gene-type';
import * as d3 from 'd3';

@Component({
  selector: 'escher-map-component',
  templateUrl: './escher-map.component.html',
  styleUrls: ['./escher-map.component.css']
})
export class EscherMapComponent implements OnInit, DoCheck {

  escherMap:any;
  map_id:string = null;

  constructor(private dataLoader: DataLoader) { }

  ngOnInit() {
     this.escherMap = this.dataLoader.buildMap();
  }

  ngDoCheck() {
    if(this.dataLoader.escherMap.map.map_name !== "new_map" && this.map_id != this.escherMap.map.map_id){
      this.map_id = this.escherMap.map.map_id;
    }
  }

}
