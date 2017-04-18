import { Component, OnInit } from '@angular/core';
import {DataLoader} from '../data-loader.service';
import * as d3 from 'd3';

@Component({
  selector: 'map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponent implements OnInit {



  constructor(private dataLoader: DataLoader) { }

  ngOnInit() {
     this.dataLoader.buildMap();
  }



}
