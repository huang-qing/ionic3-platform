import { Component, OnInit, Input } from "@angular/core";
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { IonpList, IonpListItem, IonpListGroup, IonpListComponent } from '../../components';
import { ListService } from './list.service';
import { Observable } from 'rxjs/Rx';

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
  name: 'list-page'
})
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
  pagerIndex: number = 1;

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
    this.service.getList(this.pagerIndex, true)
      .subscribe(list => this.list = list,
      error => this.errorMessage = <any>error);
  }

  onItemSelected(item: IonpListItem) {
    //console.log('onItemSelected');
    debugger;
    this.nav.push('list-page', {
      parentItem: item
    });
  }

  onInputChanged(item: IonpListItem) {
    //console.log('onInputChanged');
    this.service.inputUpdated(item).subscribe(null,
      error => this.errorMessage = <any>error);
  }

  onInputClick(item: IonpListItem) {
    //console.log('onInputClick');
  }

  doRefresh(refresher) {
    this.service.getList(1, false)
      .subscribe({
        next: list => this.list = list,
        error: error => {
          this.errorMessage = <any>error
          Observable.from('delay').delay(3000).subscribe(() => refresher.complete());
        },
        complete: () => {
          this.pagerIndex = 1;
          refresher.complete();
        }
      });
  }

  doInfinite(infiniteScroll) {
    //console.log(this.pagerIndex);
    this.service.getList(this.pagerIndex + 1, false)
      .subscribe({
        next: list => {
          let groups = list.groups;
          if (groups && groups.length > 0) {
            ++this.pagerIndex;
            this.list.groups = this.list.groups.concat(groups);
          }
        },
        error: error => {
          this.errorMessage = <any>error;
          //延时3秒完成
          Observable.from('delay').delay(3000).subscribe(() => infiniteScroll.complete());
        },
        complete: () => infiniteScroll.complete()
      });
  }

}
