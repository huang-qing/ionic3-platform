import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { Logger } from "angular2-logger/core";

@Component({
  selector: 'ionp-list',
  templateUrl: "ionp-list.html",
  providers: []
})


export class IonpListComponent {

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

  constructor(private logger: Logger) { }

  /**
   * 父组件监听子组件的事件:Parent listens for child event
   * https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html#!#parent-to-child-on-changes
   */
  itemSelected(item: IonpListItem) {
    this.onItemSelected.emit(item);
    this.logger.log('emit list.component item selected');
  }

  /**
   * https://www.angular.cn/docs/ts/latest/guide/user-input.html
   * $event.stopPropagation()
   * [ngModel]="item.input.value" 单向绑定表单控件值
   * ionChange 表单控件change事件
   * keyup.enter blur 模拟input的change事件
   * 
   * http://ionicframework.com/docs/components/#gestures
   * tap, press, pan, swipe, rotate, and pinch events
   * @param item 
   */
  inputChanged($event, item: IonpListItem) {
    
    let value;
    //ionChange事件中获取值
    if (typeof ($event.value) !== "undefined") {
      value = $event.value;
    } else if ($event.target) {//keyup.enter blur 事件中获取值
      value = $event.target.value;
    }
    else {
      value = $event;
    }
    if (item.input.value !== value) {
      item.input.value = value;
      item.inputValue = value;
      this.onInputChanged.emit(item);
      this.logger.log('emit list.component input change');
    }
  }

  inputClick(item: IonpListItem) {
    this.onInputClick.emit(item);
    this.logger.log('emit list.component input click');
  }

}

