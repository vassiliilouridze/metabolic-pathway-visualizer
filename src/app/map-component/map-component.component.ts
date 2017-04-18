import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponent implements OnInit {

  options = { menu: 'all',
              use_3d_transform: false,
              enable_editing: false,
              fill_screen: false,
              reaction_styles: ['color', 'size', 'text'],
              enable_tooltips: false };
  escherMap:any;

  constructor() { }

  ngOnInit() {
     this.buildMap();
  }

  buildMap(){
    this.escherMap = escher.Builder(null, null, null, d3.select('#map_container'), this.options);
  }

}
