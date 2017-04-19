import { Component, DoCheck} from '@angular/core';
import {DataLoader} from '../data-loader.service';
import { NodeType } from '../models/node-type';

@Component({
  selector: 'nodes-type-list',
  templateUrl: './nodes-type-list.component.html',
  styleUrls: ['./nodes-type-list.component.css']
})
export class NodesTypeListComponent implements DoCheck {

  mapName:string;
  nodesTypes: NodeType[] = [];

  constructor(private dataLoader: DataLoader) {}

  ngDoCheck() {
    if(this.dataLoader.escherMap != undefined && this.dataLoader.escherMap.map.map_name != this.mapName){
      this.mapName = this.dataLoader.escherMap.map.map_name;
      this.nodesTypes = this.dataLoader.nodesTypes;
    }
  }

}
