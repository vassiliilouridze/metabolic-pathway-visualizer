import { Component, OnInit, DoCheck } from '@angular/core';
import {DataLoader} from '../data-loader.service';
import * as d3 from 'd3';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  escherMap:any;
  map_id:string = null;
  nodesTypes: NodeType[] = [];

  constructor(private dataLoader: DataLoader) { }

  ngOnInit() {
     this.escherMap = this.dataLoader.buildMap();
  }

  ngDoCheck() {
    if(this.map_id != this.escherMap.map.map_id){
      this.map_id = this.escherMap.map.map_id;
      this.nodesTypes = this.dataLoader.makeListNodeTypes();
    }
  }

}

class NodeType{

  typeName:string;
  numberOfThis:number;

  constructor(typeName, numberOfThis) {
      this.typeName = typeName;
      this.numberOfThis = numberOfThis;
  }

}