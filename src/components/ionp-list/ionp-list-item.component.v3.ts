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
import { Logger } from "angular2-logger/core";

@Component({
  selector: '[ionp-list-item]',
  //templateUrl: "ionp-list-item.html",
  providers: []
})


export class IonpListItemComponent {

  @Input()
  item: IonpListItem;

  constructor(private logger: Logger, public alertCtrl: AlertController) {

   }
}

