import { Component, DoCheck } from '@angular/core';
import {DataLoader} from '../data-loader.service';
import { GeneType } from '../models/gene-type';

@Component({
  selector: 'genes-list',
  templateUrl: './genes-list.component.html',
  styleUrls: ['./genes-list.component.css']
})
export class GenesListComponent implements DoCheck {

  geneTypesListDone:boolean = false;
  geneTypes: GeneType[] = [];

  constructor(private dataLoader: DataLoader) {}

  ngDoCheck() {
    if(this.geneTypesListDone === false && this.dataLoader.escherMap.map.map_name !== "new_map"){
      this.geneTypesListDone = true;
      this.geneTypes = this.dataLoader.makeListGenesThatAreInMoreThanOneReaction();
    }
  }

}
