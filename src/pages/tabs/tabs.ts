/**
 * http://ionicframework.com/docs/api/components/tabs/Tab/
 * https://stackoverflow.com/questions/35162308/ionic-2-passing-tabs-navparams-to-tab
 */
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
//config
import { RouterConfig } from '../../config/router.config';

@IonicPage({
  name: 'tabs-page',
  segment: 'tabs-page'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = 'hello-ionic';
  tab2Root: any = 'hello-list';
  tab3Root: any = 'list-page';
  pageParams: any;


  constructor(nav: NavController, navParams: NavParams, router: RouterConfig) {
    let params = router.getTabsRouter[0];
    this.pageParams = { router: params };
  }

  tabSelect(index) {


  }

  ionChange(params) {
    alert('dddd');
  }
}
