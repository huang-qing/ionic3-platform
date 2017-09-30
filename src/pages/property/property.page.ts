import { Component, OnInit, ViewChild } from "@angular/core";
import { NavController, NavParams, IonicPage, ModalController, Platform, ViewController } from 'ionic-angular';
//import { PageSlide, PageSlides } from '../../models/page-slides';
import { Settings } from '../../providers';
import { Logger } from "angular2-logger/core";
import { RouterConfig } from '../../providers';
//import { APPSLIDESCONFIG } from '../../app.config/app.config';

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
    name: 'property-page',
    segment: 'property'
})

@Component({
    selector: 'page-property',
    templateUrl: 'property.html'
})

export class PropertyPage implements OnInit {

    //@ViewChild(Slides) ionSlides: Slides;

    // config: PageSlides;
    // slides: PageSlide[] = [];
    // lastSlide: PageSlide;

    character;

    //通过private关键字在构建器中声明并传入
    constructor(
        private logger: Logger,
        private nav: NavController,
        private routerConfig: RouterConfig,
        public settings: Settings,
        private navParams: NavParams,
        public viewCtrl: ViewController) {

        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.navParams.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit() {
        // this.config = APPSLIDESCONFIG;
        // if (!this.config || !this.config.slides || this.config.slides.length === 0) {
        //     this.logger.error('slides.page:please config the page slides config!');
        //     return;
        // }

        // var slides = this.config.slides,
        //     length = slides.length;

        // if (length == 1) {
        //     this.lastSlide = this.config.slides[0];
        // }
        // else if (length > 1) {
        //     this.slides = this.config.slides.slice(0, length - 1);
        //     this.lastSlide = this.config.slides.slice(-1)[0];
        // }
    }

    ngAfterViewInit() {
        //this.ionSlides.lockSwipeToPrev(true);
    }

}