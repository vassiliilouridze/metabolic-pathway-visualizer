import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class DataLoader {
  options = { menu: 'all',
              use_3d_transform: false,
              enable_editing: false,
              fill_screen: false,
              reaction_styles: ['color', 'size', 'text'],
              enable_tooltips: false };
  escherMap:any;

  constructor() { }

  buildMap(){
    this.escherMap = escher.Builder(null, null, null, d3.select('#map_container'), this.options);
  }

}
