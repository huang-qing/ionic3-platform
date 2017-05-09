import { OnInit, Injectable } from "@angular/core"
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { IonpList, IonpListGroup, IonpListItem } from '../../components';

@Injectable()
export class ListService implements OnInit {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    // URL to web api
    private url = 'api/ionplist';

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


