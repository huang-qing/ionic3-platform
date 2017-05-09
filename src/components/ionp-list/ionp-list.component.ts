import { Component, OnInit, Input } from "@angular/core";
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { AttrsDirective } from '../../directives/attrs.directive';
import { IonpListComponentTemplate } from './ionp-list.html';

@Component({
  selector: 'ionp-list',
  template: IonpListComponentTemplate,
  providers: []
})


export class IonpListComponent implements OnInit {

  selectedItem: IonpListItem;

  //huangqing: COMPONENT INTERACTION 组件通讯
  //https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html
  //1.添加 @Input
  //2.在 app.module.ts 引入 IonpListComponent
  @Input()
  list: IonpList;
  groups: IonpListGroup[];
  items: IonpListItem[];
  params: IonpListItem;

  constructor() { }

  ngOnInit() {
    //this.selectedItem = this.navParams.get('item');
    //this.params = this.navParams.data.item;
    //this.getList();
  }

}

