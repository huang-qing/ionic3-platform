import { OnInit, Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { IonpList, IonpListGroup, IonpListItem } from '../../components';
import { Api } from '../../providers';

@Injectable()
export class ListService implements OnInit {

    constructor(private http: Http, public api: Api) { }

    ngOnInit() { }

    getList(): Observable<IonpList> {
        return this.api.get<IonpList>('ionplists');
    }

}


