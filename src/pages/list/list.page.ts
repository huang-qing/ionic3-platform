import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { IonpListItem, IonpListGroup, IonpListComponent } from '../../components';
import { ListPageModel } from './list';
import { ListService } from './list.service';
import { Observable } from 'rxjs/Rx';
import { Logger } from "angular2-logger/core";
import { RouterConfig } from '../../providers';

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
  name: 'list-page',
  segment: 'list/:id'
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
    private routerConfig: RouterConfig,
    private navParams: NavParams,
    private service: ListService) { }

  ngOnInit() {

    var routerId = this.navParams.get('id'),
      segmentId = this.navParams.get('segmentId');

    if (segmentId) {
      this.model.segmentId = segmentId;
    }
    this.model.pageIndex = 1;
    this.model.parentId = this.navParams.get('parentId') || '';

    this.model.parentItem = this.navParams.get('parentItem') || '';
    this.model.title = this.navParams.get('parentTitle') || '';
    this.router = this.routerConfig.getPageConfigById(routerId);


    if (!this.router) {
      this.logger.error('list.page:please config the page router!');
      return;
    }

    if (!this.model.title) {
      this.model.title = this.router.title;
    }
    if (this.router.style) {
      let style = this.router.style;
      this.model.list.inset = style.inset;
      this.model.list.nolines = style.nolines;
    }
    if (this.router.segments && this.router.segments.length > 0) {
      this.model.segments = this.router.segments;
    }
    this.getList();
  }

  /**
   * api：
   * 
   * lists
   * lists/parentId
   * lists/segmentId/
   * lists/segmentId/parentId
   * lists/itemId
   * 
   */
  getList() {
    var url = this.router.api;
    if (this.model.segmentId) {
      url = `${url}/${this.model.segmentId}`;
    }
    if (this.model.parentId) {
      url = `${url}/${this.model.parentId}`;
    }

    this.service.getList(this.model, url, 1, true)
      .subscribe(list => {
        this.model.list.groups = list
      },
      error => this.errorMessage = <any>error);
  }

  getNavPushParams(item: IonpListItem, router: any) {
    if (!item) {
      item = new IonpListItem();
    }
    return {
      parentId: item.id,
      parentTitle: item.title || item.subTitle || item.description,
      parentItem: item,
      id: router.id
    }
  }

  onSegmentSelected(segmentId: string) {
    this.model.segmentId = segmentId;
    this.getList();
  }

  onItemSelected(item: IonpListItem) {
    var router;

    this.logger.log('list-page onItemSelected');
    if (!this.router) {
      this.logger.warn('list-page router is not exist!');
    }
    if (item.detail) {
      router = this.router;
    }
    else {
      router = this.router.next;
    }

    this.nav.push(router.component, this.getNavPushParams(item, router));

  }


  onInputChanged(item: IonpListItem) {
    this.logger.log('list-page onInputChanged');
    this.service.inputUpdated(this.router.next.api, item).subscribe(null,
      error => this.errorMessage = <any>error);
  }

  onInputClick(item: IonpListItem) {
    this.logger.log('list-page onInputClick');
    var router = this.router.actions.button;
    this.nav.push(router.component, this.getNavPushParams(item, router));
  }

  doRefresh(refresher) {
    this.service.getList(this.model, this.router.api, 1, false)
      .subscribe({
        next: list => this.model.list.groups = list,
        error: error => {
          this.errorMessage = <any>error;
          Observable.from('delay').delay(3000).subscribe(() => refresher.complete());
        },
        complete: () => {
          this.model.pageIndex = 1;
          refresher.complete();
          this.logger.log(`page index:${this.model.pageIndex}`);
        }
      });
  }

  doInfinite(infiniteScroll) {

    this.service.getList(this.model, this.router.api, this.model.pageIndex + 1, false)
      .subscribe({
        next: list => {
          let groups: IonpListGroup[] = list;
          if (groups && groups.length > 0) {
            ++this.model.pageIndex;
            this.logger.log(`page index:${this.model.pageIndex}`);
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
