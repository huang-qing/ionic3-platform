import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { IonpListComponentTemplate } from './ionp-list.html';
import { Logger } from "angular2-logger/core";


/**
 * template
 */
// var template = {
//   divider: `
//   <ion-item-divider color="light" *ngIf="group.style==='dividers'">
//     {{group?.text}}
//   </ion-item-divider>`,
//   header: `
//   <ion-list-header color="light" *ngIf="group.style==='header'">
//     {{group?.text}}
//   </ion-list-header>`,
//   item: {
//     left:
//     {
//       avatar: `
//       <ion-avatar item-left *ngIf="item?.icon?.type==='avatar'">
//         <img [src]="item.icon.src">
//       </ion-avatar>`,
//       thumbnail: `
//       <ion-thumbnail item-left *ngIf="item?.icon?.type==='thumbnail'">
//         <img [src]="item.icon.src">
//       </ion-thumbnail>`,
//       icon: `
//     <ion-icon [name]="item.icon.iconName" item-left 
//       *ngIf="item?.icon?.type==='icon'&&!item?.icon?.iconSet"
//       [color]="item.icon.color" [style.color]="item.icon.color">
//     </ion-icon>
//     <custom-icon set="{{item.icon.iconSet}}" name="{{item.icon.iconName}}" item-left  
//       *ngIf="item?.icon?.type==='icon'&&item?.icon?.iconSet"
//       [style.color]="item.icon.color" >
//     </custom-icon>`
//     },
//     center: {
//       multiLine: `
//       <ion-label *ngIf="item.title||item.subTitle">
//         <h2 *ngIf="item.title">{{item.title}}</h2>
//         <h3 *ngIf="item.subTitle">{{item.subTitle}}</h3>
//         <p *ngIf="(item.title||item.subTitle)&&item.description">{{item.description}}</p>
//       </ion-label>`,
//       singleLine: `
//       <ion-label *ngIf="(!item.title&&!item.subTitle)&&item.description">
//         {{item.description}}
//       </ion-label>`,
//     },
//     right: {
//       note: `
//       <ion-note item-right *ngIf="item?.input?.type==='note'">
//         {{item.input.text}}
//       </ion-note>`,
//       icon: `
//       <ion-icon [name]='item.input.iconName' [color]="item.input.color" item-right
//         *ngIf="item?.input?.type==='icon'&&!item?.input?.iconSet"
//         [style.color]="item.input.color">
//       </ion-icon>
//       <custom-icon set="{{item.input.iconSet}}" name="{{item.input.iconName}}" item-right
//         *ngIf="item?.input?.type==='icon'&&item?.input?.iconSet"
//         [style.color]="item.icon.color" >
//       </custom-icon>`,
//       button: `
//       <button ion-button outline item-right *ngIf="item?.input?.type==='button'"
//          (click)="inputClick(item);$event.stopPropagation();"> 
//         {{item.input.text}}
//       </button>`,
//       toggle: `
//       <ion-toggle checked="{{item.input.value}}" 
//         *ngIf="item?.input?.type==='toggle'" (ionChange)="inputChanged($event,item)"></ion-toggle>
//       `,
//       text: `
//       <ion-input type="{{item.input.style}}" item-right text-right
//         value="{{item.input.value}}" 
//         placeholder="{{item.input.text}}" 
//         (keyup.enter)="inputChanged($event,item);$event.stopPropagation();"
//         (blur)="inputChanged($event,item);$event.stopPropagation();"
//         *ngIf="item?.input?.type==='text'"></ion-input>`,
//       select: `
//       <ion-select [ngModel]="item.input.value" *ngIf="item?.input?.type==='select'" 
//         (ionChange)="inputChanged($event,item)"
//         okText="{{ 'IONP_LIST_SELECT_OK' | translate }}" 
//         cancelText="{{ 'IONP_LIST_SELECT_CANCEL' | translate }}">
//         <ion-option value="{{option.value}}"  *ngFor="let option of item.input.options" >{{option.text}}</ion-option>
//       </ion-select>`
//     },
//     content: ''
//   },
//   sliding: {
//     options: `
//     <ion-item-options side="right" *ngIf="item?.sliding?.length>0">
//       <button ion-button [color]="option.color" [color]="option.color" [style.background-color]="option.color"  *ngFor="let option of item.sliding">
//         <ion-icon [name]="option.iconName" *ngIf="!option.iconSet"> </ion-icon>
//         <custom-icon set="{{option.iconSet}}" name="{{option.iconName}}" *ngIf="option.iconSet"></custom-icon>
//         {{option.text}}
//       </button>
//     </ion-item-options>`,
//     content: ''
//   },
//   itemsType: {
//     sliding: '',
//     text: '',
//     button: ''
//   }
// };

// template.item.content = `
//   ${template.item.left.avatar}
//   ${template.item.left.icon}
//   ${template.item.left.thumbnail}

//   ${template.item.center.multiLine}
//   ${template.item.center.singleLine}

//   ${template.item.right.note}
//   ${template.item.right.icon}
//   ${template.item.right.button}
//   ${template.item.right.toggle}
//   ${template.item.right.text}
//   ${template.item.right.select}
// `;

// template.itemsType.text = `
//   <ng-container *ngIf="group.type==='text'">
//   <!--item-->
//     <ion-item ion-item *ngFor="let item of group.items">
//       ${template.item.content}
//     </ion-item>
//   </ng-container>`;

// template.itemsType.button = `
//   <ng-container *ngIf="group.type==='button'">
//     <!--item-->
//     <button ion-item (click)="itemSelected(item)"  *ngFor="let item of group.items"  [attrs]="{'detail-none':!item.detail}">
//       ${template.item.content}
//     </button>
//   </ng-container>`;

// template.itemsType.sliding = `
// <button ion-item (click)="itemSelected(item)" [attrs]="{'detail-none':!item.detail}">
//   ${template.item.content}
// </button>`;

// template.sliding.content = `
//   <ng-container *ngIf="group.type==='sliding'">
//     <ion-item-sliding *ngFor="let item of group.items">
//       <!--item-->
//       ${template.itemsType.sliding}
//       <!--sliding options-->
//       ${template.sliding.options}
//     </ion-item-sliding>
//   </ng-container>`;

// var IonpListComponentTemplate = `
//   <ion-list [attrs]="{'no-lines':list.nolines,'inset':list.inset}" *ngIf='list' >
//     <ion-item-group *ngFor="let group of list.groups" >
//       ${template.divider}
//       ${template.header}
//       ${template.itemsType.text}
//       ${template.itemsType.button}
//       ${template.sliding.content}
//     </ion-item-group>
//   </ion-list>`;

// var IonpListComponentTemplate = '';

@Component({
  selector: 'ionp-list',
  template: IonpListComponentTemplate,
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
    if (item.input.value !== value) {
      item.input.value = value;
      this.onInputChanged.emit(item);
      this.logger.log('emit list.component input change');
    }
  }

  inputClick(item: IonpListItem) {
    this.onInputClick.emit(item);
    this.logger.log('emit list.component input click');
  }

}

