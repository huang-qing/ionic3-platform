import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
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

  /**
   * huangqing: COMPONENT INTERACTION 组件通讯
   * https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html
   * 1.添加 @Input
   * 2.在 app.module.ts 引入 IonpListComponent
   * 
   */
  @Input()
  list: IonpList;
  @Output() onItemSelected = new EventEmitter<IonpListItem>();
  @Output() onInputChanged = new EventEmitter<IonpListItem>();
  @Output() onInputClick = new EventEmitter<IonpListItem>();
  groups: IonpListGroup[];
  items: IonpListItem[];
  params: IonpListItem;

  constructor() { }

  ngOnInit() { }

  /**
   * 父组件监听子组件的事件:Parent listens for child event
   * https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html#!#parent-to-child-on-changes
   */
  itemSelected(item: IonpListItem) {
    this.onItemSelected.emit(item);
  }

  /**
   * https://www.angular.cn/docs/ts/latest/guide/user-input.html
   * $event.stopPropagation()
   * ionChange 
   * @param item 
   */
  inputChanged($event, item: IonpListItem) {
    debugger;
    let value;
    if (typeof ($event.value) !== undefined) {
      value = $event.value;
    } else if ($event.target) {
      value = $event.target.value;
    }
    console.log(`inputChanged:${value}`);
    if (item.input.value !== value) {
      item.input.value = value;
      console.log(`item.input.value:${item.input.value}`);
      this.onInputChanged.emit(item);
    }
  }

  inputClick(item: IonpListItem) {
    this.onInputClick.emit(item);
  }

}

