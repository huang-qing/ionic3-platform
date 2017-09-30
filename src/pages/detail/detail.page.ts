import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
import { DetailPageModel } from './detail';
import { Settings } from '../../providers';
import { Logger } from "angular2-logger/core";
import { DetailService } from './detail.service'
import { RouterConfig } from '../../providers';

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
    name: 'detail-page',
    segment: 'detail'
})

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
    providers: [DetailService]
})

export class DetailPage implements OnInit {

    router: any;
    errorMessage: string;

    model: DetailPageModel = new DetailPageModel();

    //通过private关键字在构建器中声明并传入
    constructor(
        private logger: Logger,
        private nav: NavController,
        private routerConfig: RouterConfig,
        public settings: Settings,
        private navParams: NavParams,
        private service: DetailService,
        public viewCtrl: ViewController) {

        var parent = this.navParams.get('parentItem') || '';

        if (parent) {
            var model = this.model;
            model.id = parent.id;
            model.title = parent.title || parent.subTitle || parent.description;
            model.icon = parent.icon;
        }

        this.router = this.navParams.get('router');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit() {

        var url = this.router.api;
        if (this.model.id) {
            url = `${url}/${this.model.id}`;
        }

        this.service.getDetailInfo(this.model, url, 1, true)
            .subscribe(info => {
                this.model.info = info;
            },
            error => this.errorMessage = <any>error);

    }

    ngAfterViewInit() {

    }

}