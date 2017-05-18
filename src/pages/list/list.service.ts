import { OnInit, Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { IonpList, IonpListItem } from '../../components';
import { Api } from '../../providers';


@Injectable()
export class ListService implements OnInit {

    constructor(public api: Api) { }

    ngOnInit() { }

    getList(pagerIndex: number, showLoading: boolean): Observable<IonpList> {
        return this.api.get<IonpList>('ionplists', null, null, showLoading);
    }

    getListTestError(pagerIndex: number, showLoading: boolean): Observable<IonpList> {
        return this.api.get<IonpList>('ionplistsXXX', null, null, showLoading);
    }

    inputUpdated(item: IonpListItem): Observable<IonpListItem> {
        let url = `ionpitems/${item.id}`;
        return this.api.put<IonpListItem>(url, item);
    }

}


