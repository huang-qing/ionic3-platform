import { Component } from '@angular/core';
import { Settings } from '../../providers';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  /**
   * storage: inject it into any of your components or pages
   */
  constructor(public settings: Settings) {

    this.settings.load().then(() => {
      let options = this.settings.allSettings;
    });
  }
}
