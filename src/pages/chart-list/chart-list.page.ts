import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { IonpChart, IonpChartComponent } from '../../components';
import { ChartListPageModel } from './chart-list';
import { ChartListService } from './chart-list.service';
import { Observable } from 'rxjs/Rx';
import { Logger } from "angular2-logger/core";
import { RouterConfig } from '../../providers';

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
  name: 'chart-list-page',
  segment: 'chart-list/:id'
})

@Component({
  selector: 'page-chart-list',
  templateUrl: 'chart-list.html',
  providers: [IonpChartComponent, ChartListService]
})

export class ChartListPage implements OnInit {

  model: ChartListPageModel = new ChartListPageModel();
  router: any;
  errorMessage: string;

  //通过private关键字在构建器中声明并传入
  constructor(
    private logger: Logger,
    private nav: NavController,
    private routerConfig: RouterConfig,
    private navParams: NavParams,
    private service: ChartListService) { }

  ngOnInit() {

    var routerId = this.navParams.get('id');
    this.model.pageIndex = 1;
    this.router = this.routerConfig.getPageConfigById(routerId);

    if (!this.router) {
      this.logger.error('list.page:please config the page router!');
      return;
    }

    this.getCharts();
  }

  getCharts() {
    this.service.getCharts(this.model, this.router.api, 1, true)
      .subscribe(charts => {
        this.model.charts = charts
      },
      error => this.errorMessage = <any>error);
  }

  doRefresh(refresher) {
    this.service.getCharts(this.model, this.router.api, 1, false)
      .subscribe({
        next: charts => this.model.charts = charts,
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

    this.service.getCharts(this.model, this.router.api, this.model.pageIndex + 1, false)
      .subscribe({
        next: charts => {
          //let charts: IonpChart[] = charts;
          if (charts && charts.length > 0) {
            ++this.model.pageIndex;
            this.logger.log(`page index:${this.model.pageIndex}`);
            this.model.charts = this.model.charts.concat(charts);
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

  onItemSelected(item: IonpChart) {
    var router;

    this.logger.log('chart-list-page onTitleSelected');
    if (!this.router) {
      this.logger.warn('chart-list-page router is not exist!');
    }


    router = this.router.next;
    if (router) {
      this.nav.push(router.component, {
        parentId: item.id,
        parentItem: item,
        id: router.id
      });
    }
  }
}
