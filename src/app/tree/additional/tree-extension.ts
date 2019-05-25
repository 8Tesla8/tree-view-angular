import { TreeItem } from "./tree-item";

export class TreeExtension {

    public parentKeyAbsent(treeItem: TreeItem): boolean {
      return (
        treeItem.parentId === undefined ||
        treeItem.parentId === null ||
        treeItem.parentId === '')
    }
  
    public searchItem(treeItem: TreeItem[], searchId: string): any {
      let foundItem = null;
  
      for (let index = 0; index < treeItem.length; index++) {
        if (treeItem[index].id === searchId) {
          foundItem = treeItem[index];
          break;
        }
  
        if (treeItem[index].children !== undefined &&
          treeItem[index].children.length > 0) {
          foundItem = this.searchItem(treeItem[index].children, searchId);
        }
  
        if (foundItem !== null)
          break;
      }
  
      return foundItem;
    }
  
    public generateTestData(): TreeItem[] {
  
      return [{
        label: '1',
        id: '1',
        checked: false,
        parentId: '',
        children: [{
          label: '1 1',
          id: '11',
          checked: false,
          parentId: '1',
          children: [{
            label: '1 1 1',
            id: '111',
            checked: false,
            parentId: '11',
          } as TreeItem,
          {
            label: '1 1 2',
            id: '112',
            checked: false,
            parentId: '11',
            children: [{
              label: '1 1 2 1',
              id: '1121',
              checked: false,
              parentId: '112',
            } as TreeItem,
            {
              label: '1 1 2 2',
              id: '1122',
              checked: false,
              parentId: '112',
            } as TreeItem ]
          }]
        },
        {
          label: '1 2',
          id: '12',
          checked: false,
          parentId: '',
        } as TreeItem]
      },
      {
        label: '2',
        id: '2',
      } as TreeItem,
      {
        label: '3',
        id: '3',
        checked: false,
        parentId: '',
        children: [{
          label: '3 1',
          id: '31',
          checked: false,
          parentId: '3',
        } as TreeItem,
        {
          label: '3 2',
          id: '32',
          checked: false,
          parentId: '3',
          children: [{
            label: '3 2 1',
            id: '321',
            checked: false,
            parentId: '32',
          } as TreeItem,
          {
            label: '3 2 2',
            id: '322',
            checked: false,
            parentId: '32',
          } as TreeItem]
        }]
      },];
    }
  }