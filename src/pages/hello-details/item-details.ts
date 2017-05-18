import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'hello-list-detail',
  segment: 'hello-list-detail'
})

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
