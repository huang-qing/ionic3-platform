import { OnInit, Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { DetailPageModel, DetailInfo } from './detail'
import { Api } from '../../providers';
import { Logger } from "angular2-logger/core";

@Injectable()
export class DetailService implements OnInit {

    constructor(
        public api: Api,
        private logger: Logger) { }

    ngOnInit() { }

    getDetailInfo(model: DetailPageModel, url: string, pageIndex: number, showLoading: boolean): Observable<DetailInfo[]> {

        url = `${url}/${model.id}`;
        return this.api.get<DetailInfo[]>(url, null, null, showLoading);
    }

}


