/**
 * To update the version of the ionic-angular package, run:
 * npm install ionic-angular@latest --save --save-exact
 * 
 * To update the ionic-cli install run:
 * npm install -g ionic
 * 
 * ******************************************************
 Dependency warning - for the CLI to run correctly,
 it is highly recommended to install/upgrade the following:

 Please install your Cordova CLI to version  >=4.2.0 `npm install -g cordova`

 * ******************************************************
 * cordova -v
 * cnpm install -g cordova@7.0.0
 * ionic info
 * 
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
/**
 * native
 */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * in-memory web-api
 * cnpm install --save angular-in-memory-web-api
 */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
/**
 * http fulREST
 */
import { Http, HttpModule, JsonpModule } from '@angular/http';
/**
 * storage
 * http://ionicframework.com/docs/storage/
 */
import { Storage, IonicStorageModule } from '@ionic/storage';
/**
 * i18n
 * http://ionicframework.com/docs/resources/ng2-translate/
 * https://www.npmjs.com/package/@ngx-translate/core
 * cnpm install @ngx-translate/core @ngx-translate/http-loader --save
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/**
 * https://www.npmjs.com/package/angular2-logger
 */
import { Logger, Options as LoggerOptions, Level as LoggerLevel } from "angular2-logger/core";
/**
 * https://www.npmjs.com/package/ionic2-custom-icons
 * https://stackoverflow.com/questions/38462885/add-custom-icon-in-ionic-2
 */
import { CustomIconsModule } from 'ionic2-custom-icons';
/**
 * The translate loader needs to know where to load i18n files
 */
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
/**
 * my providers
 */
import { APPCONFIG } from '../app.config/app.config';
import {
  Settings,
  InMemoryDataService,
  Api,
  WebSocketService, IonicWebSocketService,
  RouterConfig
} from '../providers';

export function provideSettings(storage: Storage) {

  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron Huangqing Framework',
    option3: '3',
    option4: 'Hello'
  });
}

export function provideRouterCongfig() {
  return new RouterConfig(APPCONFIG.router);
}

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages: [any] = [
  MyApp
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    StatusBar,
    SplashScreen,
    Api,
    Logger,
    WebSocketService,
    IonicWebSocketService,
    { provide: RouterConfig, useFactory: provideRouterCongfig },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: LoggerOptions, useValue: { level: LoggerLevel.LOG } }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CustomIconsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    }),
    /**
     * cordova plugin add cordova-sqlite-storage --save
     * npm install --save @ionic/storage
     */
    IonicStorageModule.forRoot({
      name: '__ionicdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    /**
     * HTTP mock for the backend, MUST BE DECLARED AFTER the HttpModule
     * 
     * InMemoryBackendService not compatible? #213
     * https://github.com/ngx-translate/core/issues/213
     * 
     * 需要在translateModule之后引入
     * InMemoryDataService会造成TranslateLoader（i18n）http跟路径指向InMemoryDataService的路径的问题，使其报404错误
     * InMemoryWebApiModule中需配置 { delay: 100, passThruUnknownUrl: true }
     */
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100, passThruUnknownUrl: true }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})

export class AppModule { }
