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

  parentItem: IonpListItem;
  params: IonpListItem;

  //通过private关键字在构建器中声明并传入
  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private service: ListService) { }

  ngOnInit() {
    this.parentItem = this.navParams.get('parentItem');
    //console.log('ngOnInit');
    //console.dir(this.parentItem);
    this.getList();
  }

  getList() {
    this.service.getList().then(list => {
      this.list = list;
    });
  }

  onItemSelected(item: IonpListItem) {
    //console.log('emit');
    //console.dir(item);
    //this.onItemSelected.emit(item);
    this.nav.push(ListPage, {
      parentItem: item
    });
  }

}
