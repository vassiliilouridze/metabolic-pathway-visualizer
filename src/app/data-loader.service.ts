import { Injectable } from '@angular/core';
import { NodeType } from './models/node-type';
import { GeneType } from './models/gene-type';
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
  genesTypesObject = {};
  newGeneType: GeneType;
  geneTypes: GeneType[] = [];

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

  makeListGenesThatAreInMoreThanOneReaction(){
    for(var i in this.escherMap.map.reactions){
      for(var j in this.escherMap.map.reactions[i].genes){

        if(this.genesTypesObject[this.escherMap.map.reactions[i].genes[j].name] != null){
          this.genesTypesObject[this.escherMap.map.reactions[i].genes[j].name]++;
        }else{
          this.genesTypesObject[this.escherMap.map.reactions[i].genes[j].name] = 1;
        }

      }
    }

    for(var i in this.genesTypesObject){
      if(this.genesTypesObject[i] > 1 && i != 'None'){
        var newGeneType = new GeneType(i,this.genesTypesObject[i]);
        this.geneTypes.push(newGeneType);
      }
    }

    return this.geneTypes;
  }

}
