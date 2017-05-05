import { Component, OnInit, Input } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { AttrsDirective } from '../../directives/attrs.directive';
//import { IonicListService } from './ionp-list.service';


@Component({
    selector: 'ionp-list-item',
    templateUrl: 'ionp-list-item.html'
})


export class IonpListItemComponent implements OnInit {

    //selectedItem: IonpListItem;
    //list: IonpList;
    //groups: IonpListGroup[];

    @Input('listItem')
    item: IonpListItem;
    //params: IonpListItem;

    //通过private关键字在构建器中声明并传入
    constructor(
        //private nav: NavController,
        //private navParams: NavParams,
        //private service: IonicListService
    ) { }

    ngOnInit() {

    }


}

