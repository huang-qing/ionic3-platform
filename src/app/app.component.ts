//core
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Config } from 'ionic-angular';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//i18n
import { TranslateService } from '@ngx-translate/core';
/**
 * logger
 * https://www.npmjs.com/package/angular2-logger
 * 
 * error warn info debug log
 */
import { Logger } from "angular2-logger/core";
// websocket
import { Subscription } from 'rxjs/Subscription';
import { IonicWebSocketService } from '../services/server-websocket.service';
//config
import { RouterConfig } from '../config/router.config';
import { APPCONFIG } from '../config/app.config';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // use NavController Dynamic Links
  rootPage;
  pages: any;

  private socketSubscription: Subscription

  constructor(
    private translate: TranslateService,
    private logger: Logger,
    private config: Config,
    public router: RouterConfig,
    public socket: IonicWebSocketService,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    // set our app's pages
    this.pages = router.getNavRouter();
    this.rootPage = router.rootPage;
    this.initializeTranslate();
    this.initializeApp();
    this.initializeServerWebsocket();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeTranslate() {
    let translate = this.translate,
      pages = this.pages;

    //define translations manually with setTranslation
    translate.setTranslation(APPCONFIG.i18n.name, APPCONFIG.i18n.content);
    // Set the default language for translation strings, and the current language.
    translate.setDefaultLang(APPCONFIG.i18n.name);
    translate.use(APPCONFIG.i18n.name);

    translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

    //i18n translate pages title
    translate.get(pages.map(p => { return p.title }))
      .subscribe(values => {
        pages.forEach((value, index, array) => {
          array[index].title = values[value.title];
        });
      });
  }

  initializeServerWebsocket() {
    const stream = this.socket.connect();

    this.socketSubscription = stream.subscribe(message => {
      this.logger.log('received message from server: ', message)
    }, error => {
      var socket = error.target;
      this.logger.warn(`WebSocket connection to ${socket.url}; readyState:${socket.readyState}`);
    });

    // send message to server, if the socket is not connected it will be sent 
    // as soon as the connection becomes available thanks to QueueingSubject 
    this.socket.send('connect WebSocket server successfull!');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, { id: page.id });
  }

  ngOnDestroy() {
    this.socketSubscription.unsubscribe();
  }
}
