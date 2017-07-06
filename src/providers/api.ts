import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
/**
 * http://reactivex.io/rxjs/
 * https://www.learnrxjs.io/
 * https://www.angular.cn/docs/ts/latest/guide/server-communication.html#!#rxjs
 * https://fe.ele.me/let-us-learn-rxjs/
 * 
 * TypeError: __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__.Observable.throw is not a function
 * https://github.com/angular/angular-cli/issues/1649
 * using: import { Observable } from 'rxjs/Rx';
 * Instead of: import { Observable } from 'rxjs/Observable';
 * 
 * 跨域请求：Wikipedia 范例
 * https://www.angular.cn/docs/ts/latest/guide/server-communication.html#!#cors
 * 
 */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * http://ionicframework.com/docs/api/components/loading/LoadingController/
 * http://ionicframework.com/docs/api/components/toast/ToastController/
 */
import { LoadingController, Loading, ToastController, Toast } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { Logger } from "angular2-logger/core";


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

  public loader: Loading;
  public toast: Toast;

  constructor(
    public http: Http,
    public loadingCtrl: LoadingController,
    public translate: TranslateService,
    private logger: Logger,
    private toastCtrl: ToastController) {

  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error.status === 404) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    }
    else if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);

    this.presentToast(error.statusText);

    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json() || {};

    return body.data || {};
  }

  private presentLoading() {
    let content = "Please wait...";

    this.translate.get('LOADING_CONTENT').subscribe(
      value => {
        content = value;
      });

    this.loader = this.loadingCtrl.create({
      content: content
    });

    this.loader.present();
  }

  private dismissLoading() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }

  private presentToast(error) {
    error = error || 'api error';
    let message = "Request Error,Please Try It Later!";
    this.translate.get('API_TOAST_MESSAGE').subscribe(
      value => {
        message = `${value}-(${error})`;
      });

    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: 'toast-danger',
      position: 'top'
    });

    toast.present();
  }

  //获取
  get<T>(url: string, params?: any, options?: RequestOptions, showLoading: boolean = true): Observable<T> {

    if (showLoading) {
      this.presentLoading();
    }

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

    this.logger.info(url);

    return this.http.get(url, _options)
      .map(this.extractData)
      .catch(error => this.handleError(error))
      .finally(() => {
        if (showLoading) {
          this.dismissLoading()
        }
      });
  }

  //创建
  post<T>(url: string, body: any, options?: RequestOptions): Observable<T> {

    let _options = options;
    if (!options) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      _options = new RequestOptions({ headers: headers });
    }

    return this.http.post(url, body, _options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  //idempotent 幂等：编辑修改
  put<T>(url: string, body: any, options?: RequestOptions): Observable<T> {

    let _options = options;

    if (!options) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      _options = new RequestOptions({ headers: headers });
    }

    return this.http.put(url, body, _options)
      .map(this.extractData)
      .catch(error => this.handleError(error));
  }

  //删除
  delete(url: string, body: any, options?: RequestOptions) {
    return this.http.post(url, body, options)
      .catch(error => this.handleError(error));
  }

  patch(url: string, body: any, options?: RequestOptions) {
    return this.http.put(url, body, options)
      .catch(error => this.handleError(error));
  }

}
