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
import { InMemoryDataService } from '../services/in-memory-data.service';
/**
 * http fulREST
 */
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { Api } from '../providers';
/**
 * storage
 * http://ionicframework.com/docs/storage/
 */
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Settings } from '../providers';
/**
 * components
 */
import { IonpListComponent } from '../components';
/**
 * Ionic demo
 */
import { HelloIonicPage, HelloListPage, HelloItemDetailsPage } from '../pages';
import { IonicListPage } from '../pages';
/**
 * pages
 */
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from '../pages';
import { ListPageModule } from '../pages/list/list.page.module';


/**
 * directives
 */
import { AttrsDirective } from '../directives/attrs.directive';

/**
 * i18n
 * http://ionicframework.com/docs/resources/ng2-translate/
 * cnpm install @ngx-translate/core @ngx-translate/http-loader --save
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


/**
 * The translate loader needs to know where to load i18n files
 */
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages: [any] = [
  MyApp,
  //hello ionic
  HelloIonicPage,
  HelloItemDetailsPage,
  HelloListPage,
  //ionic component
  IonicListPage,
  //ionic 3 platform components
  IonpListComponent,
  //ionic 3 platform pages
  ListPage
  //IonicPageModule
];

export function declarations() {
  //let declarations = pages.concat([AttrsDirective]);
  //return declarations;

  return [
    MyApp,
    //hello ionic
    HelloIonicPage,
    HelloItemDetailsPage,
    HelloListPage,
    //ionic component
    IonicListPage,
    //ionic 3 platform components
    //IonpListComponent,
    //ionic 3 platform pages
    //ListPage
    //IonicPageModule
    //AttrsDirective
  ]
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    Api
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicStorageModule.forRoot({
      name: '__ionicdb',
      /**
       * cordova plugin add cordova-sqlite-storage --save
       * npm install --save @ionic/storage
       */
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
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
    ListPageModule,
    //IonicPageModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  //entryComponents: entryComponents(),
  entryComponents: [
    MyApp,
    //hello ionic
    HelloIonicPage,
    HelloItemDetailsPage,
    HelloListPage,
    //ionic component
    IonicListPage,
    //ionic 3 platform components
    //IonpListComponent,
    //ionic 3 platform pages
    ListPage
    //IonicPageModule
  ],
  providers: providers()
})

export class AppModule { }
