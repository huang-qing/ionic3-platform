import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
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

  // get(endpoint: string, params?: any, options?: RequestOptions) {
  //   if (!options) {
  //     options = new RequestOptions();
  //   }

  //   // Support easy query params for GET requests
  //   if (params) {
  //     let p = new URLSearchParams();
  //     for (let k in params) {
  //       p.set(k, params[k]);
  //     }
  //     // Set the search field if we have params and don't already have
  //     // a search field set in options.
  //     options.search = !options.search && p || options.search;
  //   }

  //   return this.http.get(this.url + '/' + endpoint, options);
  // }

  private handleError(error: any): Promise<any> {
    // for demo purposes only
    console.error('An http error occurred', error);
    return Promise.reject(error.message || error);
  }

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

  post(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
