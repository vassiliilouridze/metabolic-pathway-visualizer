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
  nodesTypesObject = {};
  newNodeType: NodeType;
  nodesTypes: NodeType[] = [];

  constructor() { }

  buildMap(){
    this.escherMap = escher.Builder(null, null, null, d3.select('#map_container'), this.options);
    return this.escherMap;
  }

  makeListNodeTypes(){
    var nodesArrayLength = this.escherMap.map.nodes.length;
    for(var i in this.escherMap.map.nodes){
      if(this.nodesTypesObject[this.escherMap.map.nodes[i].node_type] != null){
        this.nodesTypesObject[this.escherMap.map.nodes[i].node_type]++;
      }else{
        this.nodesTypesObject[this.escherMap.map.nodes[i].node_type] = 1;
      }
    }

    for(var i in this.nodesTypesObject){
      var newNodeType = new NodeType(i,this.nodesTypesObject[i]);
      this.nodesTypes.push(newNodeType);
    }

    return this.nodesTypes;
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
