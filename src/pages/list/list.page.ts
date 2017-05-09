import { Component, OnInit, Input } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { IonpList, IonpListItem, IonpListGroup, IonpListComponent } from '../../components';
import { ListService } from './list.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [IonpListComponent, ListService]
})

export class ListPage implements OnInit {

  list: IonpList;

  //selectedItem: IonpListItem;
  //groups: IonpListGroup[];
  //items: IonpListItem[];
  //params: IonpListItem;
  //@ViewChild(DynamicComponentDirective) dynamicComponentHost: DynamicComponentDirective;
  //通过private关键字在构建器中声明并传入
  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private service: ListService) { }

  ngOnInit() {
    //this.selectedItem = this.navParams.get('item');
    //this.params = this.navParams.data.item;
    this.getList();
  }

  getList() {
    this.service.getList().then(list => {
      this.list = list;
    });
  }

}
