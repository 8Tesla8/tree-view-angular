import { Component, OnInit } from '@angular/core';
import { TreeExtension } from './additional/tree-extension';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

  public groupExtension: TreeExtension = new TreeExtension();

  public currentItem: any;

  public allData: any;
  public showData: any;
  
  ngOnInit() {
    this.allData =
    this.showData = this.groupExtension.generateTestData();
  }

  public back() {
    if (this.groupExtension.parentKeyAbsent(this.currentItem)) {
      this.showData = this.allData;
      this.currentItem = undefined;
      return;
    }

    let foundItem = this.groupExtension.searchItem(this.allData, this.currentItem.parentIdString);

    this.showData = foundItem.children;
    this.currentItem = foundItem;
  }

  public selectRow(group) {
    this.currentItem = group;
    this.showData = group.children;
  }
}
