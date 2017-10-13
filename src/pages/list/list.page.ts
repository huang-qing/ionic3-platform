import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, IonicPage, ModalController, Platform, ViewController } from 'ionic-angular';
import { IonpListItem, IonpListGroup, IonpListComponent } from '../../components';
import { ListPageModel } from './list';
import { PropertyPage } from '../property/property.page';
import { ListService } from './list.service';
import { Segment } from '../../models/segment';
import { Observable } from 'rxjs/Rx';
import { Logger } from "angular2-logger/core";
import { RouterConfig } from '../../providers';
import { Settings } from '../../providers';

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
    public settings: Settings,
    private logger: Logger,
    private nav: NavController,
    private routerConfig: RouterConfig,
    private navParams: NavParams,
    private service: ListService,
    public modalCtrl: ModalController) { }

  // ngOnInit(){}

  ngOnInit() {

    var routerId = this.navParams.get('routerId'),
      segmentId = this.navParams.get('segmentId');

    if (segmentId) {
      this.model.segmentId = segmentId;
    }
    this.model.pageIndex = 1;
    this.model.parentId = this.navParams.get('parentId') || '';

    this.model.parentItem = this.navParams.get('parentItem') || '';
    this.model.title = this.navParams.get('parentTitle') || '';
    this.router = this.navParams.get('router') || this.routerConfig.getPageConfigById(routerId);

    if (!this.router) {
   
      // this.settings.getValue('router').then(router => {
      //   this.router = JSON.parse(router);
      // });
      this.logger.warn('router config is null, will load from settings');
      return;
    }
    else {
      //this.settings.setValue('router', JSON.stringify(this.router));
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
      //设定默认选中的segment项
      if (!this.model.segmentId) {
        for (var i = 0, len = this.model.segments.length; i < len; i++) {
          var segment = this.model.segments[i];
          if (segment.selected) {
            this.model.segmentId = segment.value;
            break;
          }
        }
      }
    }
    this.getList();
  }

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
      routerId: router.id,
      router: router,
      modal: false
    }
  }

  segmentChanged(item: Segment) {
    this.model.segmentId = item.value;
    this.getList();
  }

  onItemSelected(item: IonpListItem) {
    var router;

    this.logger.log('list-page onItemSelected');
    if (!this.router) {
      this.logger.warn('list-page router is not exist!');
    }
    //detail表示是否存在下级：存在加载下级列表，不存在显示当前项的详细信息
    if (item.arrow) {
      router = this.router;
    }
    else {
      router = this.router.detail;
    }

    this.nav.push(router.component, this.getNavPushParams(item, router));

  }

  onInputChanged(item: IonpListItem) {

    this.logger.log('list-page onInputChanged');
    this.service.inputUpdated(this.router.detail.api, item).subscribe(null,
      error => this.errorMessage = <any>error);
  }

  onInputClick(item: IonpListItem) {
    this.logger.log('list-page onInputClick');
    var router = this.router.actions.button;
    //this.nav.push(router.component, this.getNavPushParams(item, router));
    this.presentModal(router.component, item, router);
  }

  presentModal(component: any, item: IonpListItem, router: any) {
    let params = this.getNavPushParams(item, router);
    params.modal = true;
    let modal = this.modalCtrl.create(component, params);
    modal.present();
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
