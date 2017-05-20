import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { IonpListItem, IonpListGroup, IonpListComponent } from '../../components';
import { ListPageModel } from './list';
import { ListService } from './list.service';
import { Observable } from 'rxjs/Rx';
import { Logger } from "angular2-logger/core";

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
  name: 'list-page',
  segment: 'list'
})

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [IonpListComponent, ListService]
})

export class ListPage implements OnInit {

  model: ListPageModel = new ListPageModel();
  router: any;
  errorMessage: string;

  //通过private关键字在构建器中声明并传入
  constructor(
    private logger: Logger,
    private nav: NavController,
    private navParams: NavParams,
    private service: ListService) { }

  ngOnInit() {
    this.model.pageIndex = 1;
    this.model.parentId = this.navParams.get('parentId') || '';
    this.model.parentItem = this.navParams.get('parentItem') || '';
    this.router = this.navParams.get('router');


    if (this.router && this.router.style) {
      let style = this.router.style;
      this.model.list.inset = style.inset;
      this.model.list.nolines = style.nolines;
    }
    this.getList();
  }

  getList() {
    this.service.getList(this.model, this.router, 1, true)
      .subscribe(list => this.model.list.groups = list,
      error => this.errorMessage = <any>error);
  }

  onItemSelected(item: IonpListItem) {
    this.logger.log('list-page onItemSelected');
    if (!this.router) {
      this.logger.warn('list-page router is not exist!');
    }
    this.nav.push('list-page', {
      parentId: item.id,
      parentItem: item,
      router: this.router
    });
  }


  onInputChanged(item: IonpListItem) {
    this.logger.log('list-page onInputChanged');
    this.service.inputUpdated(item).subscribe(null,
      error => this.errorMessage = <any>error);
  }

  onInputClick(item: IonpListItem) {
    this.logger.log('list-page onInputClick');
  }

  doRefresh(refresher) {
    this.service.getList(this.model, this.router, 1, false)
      .subscribe({
        next: list => this.model.list.groups = list,
        error: error => {
          this.errorMessage = <any>error;
          Observable.from('delay').delay(3000).subscribe(() => refresher.complete());
        },
        complete: () => {
          this.model.pageIndex = 1;
          refresher.complete();
          this.logger.log(this.model.pageIndex);
        }
      });
  }

  doInfinite(infiniteScroll) {

    this.service.getList(this.model, this.router, this.model.pageIndex + 1, false)
      .subscribe({
        next: list => {
          let groups: IonpListGroup[] = list;
          if (groups && groups.length > 0) {
            ++this.model.pageIndex;
            this.logger.log(this.model.pageIndex);
            this.model.list.groups = this.model.list.groups.concat(groups);
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
