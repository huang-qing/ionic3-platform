/**
 * 
 * https://stackoverflow.com/questions/34588933/how-to-remove-replace-the-angular2-components-selector-tag-from-html
 * As a workaround you can use an attribute selector in your component like
 * selector: '[my-component]'
 * and then use it like
 * <div my-component>Hello My component</div>
 * 
 * 
 */
import { Component, EventEmitter, Input, Output, } from "@angular/core";
import { AlertController } from 'ionic-angular';
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { TranslateService } from '@ngx-translate/core';
import { Logger } from "angular2-logger/core";

@Component({
  selector: '[ionp-list]',
  templateUrl: "ionp-list.html"
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

  constructor(
    private logger: Logger,
    public alertCtrl: AlertController,
    public translate: TranslateService) { }

  /**
   * 父组件监听子组件的事件:Parent listens for child event
   * https://www.angular.cn/docs/ts/latest/cookbook/component-communication.html#!#parent-to-child-on-changes
   */
  itemSelected($event, type, item: IonpListItem) {

    if (type === 'text') {
      $event.stopPropagation();
      return;
    }
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

  inputClick($event, item: IonpListItem) {
    this.onInputClick.emit(item);
    this.logger.log('emit list.component input click');
  }

  showPrompt($event, item: IonpListItem) {
    this.translate.get(['IONP_LIST_SELECT_OK', 'IONP_LIST_SELECT_CANCEL']).subscribe(values => {

      values;
      let prompt = this.alertCtrl.create({
        title: item.title || item.subTitle || item.description,
        //message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            //name: 'title',
            //placeholder: 'Title',
            type: item.input.style,
            value: item.input.value.toString()
          },
        ],
        buttons: [
          {
            text: values.IONP_LIST_SELECT_CANCEL,
            handler: data => {
              this.logger.log('Cancel clicked');
            }
          },
          {
            text: values.IONP_LIST_SELECT_OK,
            handler: data => {
   
              this.logger.log('Saved clicked');
              $event.value = data[0];
              this.inputChanged($event, item);
            }
          }
        ]
      });
      prompt.present();
    });

  }

}

