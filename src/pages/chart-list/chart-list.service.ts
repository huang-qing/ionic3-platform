import { OnInit, Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { IonpChart } from '../../components';
import { ChartListPageModel } from './chart-list';
import { Api } from '../../providers';
import { Logger } from "angular2-logger/core";

@Injectable()
export class ChartListService implements OnInit {

    constructor(
        public api: Api,
        private logger: Logger) { }

    ngOnInit() { }

    getCharts(model: ChartListPageModel, url: string, pageIndex: number, showLoading: boolean): Observable<IonpChart[]> {

        url = `${url}`;
        return this.api.get<IonpChart[]>(url, null, null, showLoading);
    }


}


