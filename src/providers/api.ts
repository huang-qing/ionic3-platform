import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
/**
 * TypeError: __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__.Observable.throw is not a function
 * https://github.com/angular/angular-cli/issues/1649
 * using: import { Observable } from 'rxjs/Rx';
 * Instead of: import { Observable } from 'rxjs/Observable';
 */
import { Observable } from 'rxjs/Rx';
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
 * 
 * Observable
 * 此类型只有当执行subscribe方法后才会真正执行
 */
@Injectable()
export class Api {
  //url: string = 'https://example.com/api/v1';
  url: string = 'api';

  constructor(public http: Http) {
  }


  private handleError(error: Response | any) {
    debugger;
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

  private extractData(res: Response) {
    debugger;
    let body = res.json() || {};

    return body.data || {};
  }

  //获取
  get<T>(endpoint: string, params?: any, options?: RequestOptions): Observable<T> {

    let _options = options || new RequestOptions();


    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      _options.search = !_options.search && p || _options.search;
    }

    return this.http.get(this.url + '/' + endpoint, _options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //创建
  post<T>(endpoint: string, body: any, options?: RequestOptions): Observable<T> {

    let _options = options;
    if (!options) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      _options = new RequestOptions({ headers: headers });
    }

    return this.http.post(this.url + '/' + endpoint, body, _options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //idempotent 幂等：编辑修改
  put<T>(endpoint: string, body: any, options?: RequestOptions): Observable<T> {

    let _options = options;

    if (!options) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      _options = new RequestOptions({ headers: headers });
    }
    debugger;
    return this.http.put(this.url + '/' + endpoint, body, _options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //删除
  delete(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
