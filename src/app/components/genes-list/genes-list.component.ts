import { Component, DoCheck } from '@angular/core';
import {DataLoader} from '../../services/data-loader.service';
import { GeneType } from '../../models/gene-type';

@Component({
  selector: 'genes-list',
  templateUrl: './genes-list.component.html',
  styleUrls: ['./genes-list.component.css']
})
export class GenesListComponent implements DoCheck {

  geneTypes: GeneType[] = [];
  mapName:string;

  constructor(private dataLoader: DataLoader) {}

  ngDoCheck() {
    if(this.dataLoader.escherMap != undefined && this.dataLoader.escherMap.map.map_name != this.mapName){
      this.mapName = this.dataLoader.escherMap.map.map_name;
      this.geneTypes = this.dataLoader.geneTypes;
    }
  }

}
