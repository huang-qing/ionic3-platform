// import { OnInit, Injectable } from "@angular/core";
// import { Observable } from 'rxjs/Observable';
// import { IonpListGroup, IonpListItem } from '../../components';
// import { ListPageModel } from './list';
// import { Api } from '../../providers';
// import { Logger } from "angular2-logger/core";

// @Injectable()
// export class ListService implements OnInit {

//     constructor(
//         public api: Api,
//         private logger: Logger) { }

//     ngOnInit() { }

//     getList(model: ListPageModel, url: string, pageIndex: number, showLoading: boolean): Observable<IonpListGroup[]> {

//         url = `${url}/${model.parentId}`;
//         return this.api.get<IonpListGroup[]>(url, null, null, showLoading);
//     }

//     getListTestError(model: ListPageModel, url: string, pageIndex: number, showLoading: boolean): Observable<IonpListGroup[]> {
//         return this.api.get<IonpListGroup[]>(`${url}/${model.parentId}`, null, null, showLoading);
//     }

//     inputUpdated(url: string, item: IonpListItem): Observable<IonpListItem> {
//         url = `${url}/${item.id}`;
//         return this.api.put<IonpListItem>(url, item);
//     }

// }


