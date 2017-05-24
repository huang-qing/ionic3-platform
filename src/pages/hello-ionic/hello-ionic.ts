import { Component } from '@angular/core';
import { Settings } from '../../providers';
import { IonicPage } from 'ionic-angular';
import { Logger } from "angular2-logger/core";


@IonicPage({
  name: 'hello-ionic',
  segment: 'hello-ionic'
})
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  /**
   * storage: inject it into any of your components or pages
   */
  constructor(public settings: Settings, logger: Logger) {

    //settings
    this.settings.load().then(() => {
      let options = this.settings.allSettings;
      logger.log(options);
    });
  }
}
