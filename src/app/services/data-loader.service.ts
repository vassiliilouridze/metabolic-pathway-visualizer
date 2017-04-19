import { Injectable } from '@angular/core';
import { NodeType } from '../models/node-type';
import { GeneType } from '../models/gene-type';
import * as d3 from 'd3';

@Injectable()
export class DataLoader {
  options = {
    menu: 'all',
    scroll_behavior: 'zoom',
    enable_editing:true,
    enable_keys:true,
    enable_tooltips:false
  }
  escherMap:any;
  nodesTypesObject = {};
  newNodeType: NodeType;
  nodesTypes: NodeType[] = [];
  genesTypesObject = {};
  newGeneType: GeneType;
  geneTypes: GeneType[] = [];
  selectedPathway:string;

  constructor() {}

  async getFile(file){
   return new Promise((resolve,reject) => {
     var fileReader = new FileReader();
     fileReader.readAsBinaryString(file);
     fileReader.onload = (event:any) => {
        var fileInJSON=JSON.parse(fileReader.result);
        this.buildMap(fileInJSON);
        this.makeListNodeTypes();
        this.makeListGenesThatAreInMoreThanOneReaction();
        this.enablePathwaySelection();
        resolve(fileInJSON);
     }
   });
  }

  buildMap(fileInJSON){
    this.escherMap = escher.Builder(fileInJSON, null, null, d3.select('#map_container'), this.options);
    d3.select('.search-menu-container').style("display","none");
    return this.escherMap;
  }

  enablePathwaySelection(){
    d3.selectAll('path.segment').on("click", (data) => {
      var nameFrom = this.escherMap.map.nodes[data.from_node_id].node_type;
      var nameTo= this.escherMap.map.nodes[data.to_node_id].node_type;

      if(this.escherMap.map.nodes[data.from_node_id].name != undefined){
        nameFrom = this.escherMap.map.nodes[data.from_node_id].name;
      }
      if(this.escherMap.map.nodes[data.to_node_id].name != undefined){
        nameTo = this.escherMap.map.nodes[data.to_node_id].name;
      }

      this.selectedPathway = 'From: '+nameFrom+', To: '+nameTo;
    });
  }

  makeListNodeTypes(){
    if(this.nodesTypes.length > 0){
      this.nodesTypes = [];
      this.nodesTypesObject = {};
    }

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
    if(this.geneTypes.length > 0){
      this.geneTypes = [];
      this.genesTypesObject = {};
    }

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
