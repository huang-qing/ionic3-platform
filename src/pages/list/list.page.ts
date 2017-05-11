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
  errorMessage: string;

  //通过private关键字在构建器中声明并传入
  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private service: ListService) { }

  ngOnInit() {
    this.parentItem = this.navParams.get('parentItem');
    this.getList();
  }

  getList() {
    this.service.getList()
      .subscribe(list => this.list = list,
      error => this.errorMessage = <any>error);
  }

  onItemSelected(item: IonpListItem) {
    this.nav.push(ListPage, {
      parentItem: item
    });
  }

}
