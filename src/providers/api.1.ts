import { Injectable } from '@angular/core';
import { Http,Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';


/**
 * Api is a generic REST Api handler. Set your API url first.
 * 
 * HTTP 客户端:
 * https://www.angular.cn/docs/ts/latest/guide/server-communication.html
 * 
 * 泛型：
 * https://www.typescriptlang.org/docs/handbook/generics.html
 */
@Injectable()
export class Api {
  //url: string = 'https://example.com/api/v1';
  url: string = 'api';

  constructor(public http: Http) {
  }


  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  //获取
  get<T>(endpoint: string, params?: any, options?: RequestOptions): Promise<T> {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options)
      .toPromise()
      .then(response => response.json().data as T)
      .catch(this.handleError);
  }

  //创建
  post<T>(endpoint: string, body: any, options?: RequestOptions): Promise<T> {

    return this.http.post(this.url + '/' + endpoint, body, options)
      .toPromise()
      .then(response => response.json().data as T)
      .catch(this.handleError);
  }

  //idempotent 幂等：编辑修改
  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  //删除
  delete(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
