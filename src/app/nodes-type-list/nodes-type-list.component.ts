import { Component, DoCheck} from '@angular/core';
import {DataLoader} from '../data-loader.service';
import { NodeType } from '../models/node-type';

@Component({
  selector: 'nodes-type-list',
  templateUrl: './nodes-type-list.component.html',
  styleUrls: ['./nodes-type-list.component.css']
})
export class NodesTypeListComponent implements DoCheck {

  nodesTypeListDone:boolean = false;
  nodesTypes: NodeType[] = [];

  constructor(private dataLoader: DataLoader) {}

  ngDoCheck() {
    if(this.nodesTypeListDone === false && this.dataLoader.escherMap.map.map_name !== "new_map"){
      this.nodesTypeListDone = true;
      this.nodesTypes = this.dataLoader.makeListNodeTypes();
    }
  }

}
