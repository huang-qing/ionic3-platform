import { OnInit, Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { IonpList, IonpListItem } from '../../components';
import { ListPageModel } from './list';
import { Api } from '../../providers';


@Injectable()
export class ListService implements OnInit {

    constructor(public api: Api) { }

    ngOnInit() { }

    getList(model: ListPageModel, router: any, pageIndex: number, showLoading: boolean): Observable<IonpList> {
        let url = `${router.api}/${model.parentId}`;
        return this.api.get<IonpList>(url, null, null, showLoading);
    }

    getListTestError(model: ListPageModel, router: any, pageIndex: number, showLoading: boolean): Observable<IonpList> {
        return this.api.get<IonpList>(`${router.api}/${model.parentId}`, null, null, showLoading);
    }

    inputUpdated(item: IonpListItem): Observable<IonpListItem> {
        let url = `ionpitems/${item.id}`;
        return this.api.put<IonpListItem>(url, item);
    }

}


