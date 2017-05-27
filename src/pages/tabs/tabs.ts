/**
 * http://ionicframework.com/docs/api/components/tabs/Tab/
 * https://stackoverflow.com/questions/35162308/ionic-2-passing-tabs-navparams-to-tab
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
//config
import { RouterConfig } from '../../providers';

@IonicPage({
  name: 'tabs-page',
  segment: 'tabs'
})

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabsRoot = [];
  tabsRouter;

  constructor(private nav: NavController,
    private navParams: NavParams,
    private router: RouterConfig) { }

  ngOnInit() {
    this.tabsRouter = this.router.getTabsRouter();

    this.tabsRouter.forEach((page) => {
      this.tabsRoot.push({
        page: page,
        params: { id: page.id }
      })
    });
  }

}
