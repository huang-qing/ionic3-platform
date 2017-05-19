//core
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Config } from 'ionic-angular';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//i18n
import { TranslateService } from '@ngx-translate/core';
//logger
import { Logger } from "angular2-logger/core";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // use NavController Dynamic Links
  rootPage = 'hello-ionic';

  pages: Array<{
    title: string,
    component: any,
    style: any,
    api: any,
    next: any
  }>;

  constructor(
    translate: TranslateService,
    logger: Logger,
    config: Config,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {

    // Set the default language for translation strings, and the current language.
    translate.setDefaultLang('zh-CN');
    translate.use('zh-CN');

    translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

    this.initializeApp();

    // set our app's pages
    this.pages = [
      {
        title: 'HELLO_IONIC',
        component: 'hello-ionic',
        style: null,
        api: '',
        next: null,
      },
      {
        title: 'MY_FIRST_LIST',
        component: 'hello-list',
        style: null,
        api: '',
        next: null
      },
      //{ title: 'IONIC_LIST_PAGE', component: IonicListPage },
      {
        title: 'LIST_PAGE',
        component: 'list-page',
        style: {
          nolines: false,
          inset: false
        },
        next: {
          title: 'DETAIL_PAGE',
          component: 'detail-page',
          api: 'api/items'
        },
        api: 'api/lists'
      }
    ];

    //i18n translate pages title
    translate.get(this.pages.map(p => { return p.title }))
      .subscribe(values => {
        this.pages.forEach((value, index, array) => {
          array[index].title = values[value.title];
        });
      });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, { router: page });
  }
}
