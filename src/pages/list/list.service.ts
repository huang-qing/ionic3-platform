import { OnInit, Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { IonpListGroup, IonpListItem } from '../../components';
import { ListPageModel } from './list';
import { Api } from '../../providers';


@Injectable()
export class ListService implements OnInit {

    constructor(public api: Api) { }

    ngOnInit() { }

    getList(model: ListPageModel, router: any, pageIndex: number, showLoading: boolean): Observable<IonpListGroup[]> {
        let url = `${router.api}/${model.parentId}`;
        return this.api.get<IonpListGroup[]>(url, null, null, showLoading);
    }

    getListTestError(model: ListPageModel, router: any, pageIndex: number, showLoading: boolean): Observable<IonpListGroup[]> {
        return this.api.get<IonpListGroup[]>(`${router.api}/${model.parentId}`, null, null, showLoading);
    }

    inputUpdated(item: IonpListItem): Observable<IonpListItem> {
        let url = `ionpitems/${item.id}`;
        return this.api.put<IonpListItem>(url, item);
    }

}


