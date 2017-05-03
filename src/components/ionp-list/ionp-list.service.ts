import { OnInit, Injectable } from "@angular/core";
//import { NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { IonpList, IonpListGroup, IonpListItem } from './ionp-list';
//import { ITEMS, ICONS, GROUPS } from './list.mock';

@Injectable()
export class IonicListService implements OnInit {

    // getList(params: ListItem) {
    //     var data: Promise<ListGroup[]>;

    //     data = new Promise<ListGroup[]>(function (resolve, reject) {
    //         console.log('doRefresh wait 0-3 seconds start');
    //         setTimeout(function () {
    //             //debugger;
    //             resolve(GROUPS());
    //             console.log('doRefresh wait 0-3 seconds end');
    //         }, ([0, 1, 2, 3][Math.floor(Math.random() * 4)]) * 1000);
    //     });

    //     if (params) {
    //         data.then(groups => groups.forEach(function (value, index, array) {
    //             var group: ListGroup = value;
    //             var items: Array<ListItem> = value.items;

    //             group.name = params.title + "$" + group.name;
    //             items.forEach(function (value, index, array) {
    //                 var item: ListItem = value;

    //                 item.title = params.title + "->" + item.title;
    //             });

    //         }));
    //     }
    //     return data;
    // }
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url = 'api/ionplist';  // URL to web api

    constructor(private http: Http) { }

    getList(): Promise<IonpList> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as IonpList)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    ngOnInit() { }
}


