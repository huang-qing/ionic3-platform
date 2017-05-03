import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { IonpList, IonpListItem, IonpListGroup } from './ionp-list';
import { AttrsDirective } from '../../directives/attrs.directive';
import { IonicListService } from './ionp-list.service';


@Component({
  selector: 'ionp-list',
  templateUrl: 'ionp-list.html',
  providers: [IonicListService]
})


export class IonpListComponent implements OnInit {

  selectedItem: IonpListItem;
  list: IonpList;
  groups: IonpListGroup[];
  items: IonpListItem[];
  params: IonpListItem;

  //通过private关键字在构建器中声明并传入
  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private service: IonicListService) { }

  ngOnInit() {
    this.selectedItem = this.navParams.get('item');
    this.params = this.navParams.data.item;
    this.getList();
  }

  getList() {

    // this.service.getList(this.params).then(groups => {
    //   this.groups = groups;
    // });

    this.service.getList().then(list => {
      console.dir(list);
      this.list = list;
    });
  }

  itemTapped($event, item) {
    console.log("itemTapped");
    //this.nav.present(this.loading);

    this.nav.push(IonpList, {
      item: item
    });
    //.then(() => { this.loading.dismiss() });
  }

  itemIconTapped($event, item) {
    console.log("itemIconTapped");
  }

  itemSecondIconTapped($event, item) {
    console.log("itemSecondIconTapped");
  }

}

