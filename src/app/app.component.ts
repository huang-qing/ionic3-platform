//core
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Config } from 'ionic-angular';

//pages
import { HelloIonicPage, HelloListPage } from '../pages';
import { IonicListPage } from '../pages';
import { ListPage } from '../pages';

//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//i18n
import { TranslateService } from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    translate: TranslateService,
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
      { title: 'HELLO_IONIC', component: HelloIonicPage },
      { title: 'MY_FIRST_LIST', component: HelloListPage },
      { title: 'IONIC_LIST_PAGE', component: IonicListPage },
      { title: 'LIST_PAGE', component: ListPage }
    ];

    //i18n translate pages title
    let pagesTitle = this.pages.map(page => {
      return page.title
    });

    translate.get(pagesTitle).subscribe(values => {
      this.pages.forEach(function (value, index, array) {
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
    this.nav.setRoot(page.component);
  }
}
