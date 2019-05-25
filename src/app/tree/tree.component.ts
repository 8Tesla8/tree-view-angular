import { Component, OnInit } from '@angular/core';
import { TreeExtension } from './additional/tree-extension';
import { TreeItem } from './additional/tree-item';
import * as _ from 'lodash';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

  public treeExtension: TreeExtension = new TreeExtension();

  public currentItem: TreeItem;

  public selectedItems: TreeItem[] = [];

  public allData: TreeItem[];
  public showData: TreeItem[];

  ngOnInit() {
    this.allData =
      this.showData = this.treeExtension.generateTestData();
  }

  public back() {
    if (this.treeExtension.parentKeyAbsent(this.currentItem)) {
      this.showData = this.allData;
      this.currentItem = undefined;
      return;
    }

    let foundItem = this.treeExtension.searchItem(this.allData, this.currentItem.parentId);

    this.showData = foundItem.children;
    this.currentItem = foundItem;
  }

  public showChildren(treeItem: TreeItem,) {
    this.currentItem = treeItem;
    this.showData = treeItem.children;
  }

  public changeStatus(treeItem: TreeItem, event: any) {
    if (treeItem.checked === undefined ||
      treeItem.checked === null) {
        treeItem.checked = true;
    }
    else {
      treeItem.checked = !treeItem.checked;
    }


    if(treeItem.checked === true){
      this.selectedItems.push(treeItem);
    }
    else {
      _.remove(this.selectedItems, { id: treeItem.id });
    }
  }
}
