import { Component, OnInit, ViewChild } from "@angular/core";
import { NavController, NavParams, IonicPage, Slides } from 'ionic-angular';
import { PageSlide, PageSlides } from '../../models/page-slides';
import { Settings } from '../../providers';
import { Logger } from "angular2-logger/core";
import { RouterConfig } from '../../providers';
import { APPSLIDESCONFIG } from '../../app.config/app.config';

/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 */
@IonicPage({
    name: 'slides-page',
    segment: 'slides'
})

@Component({
    selector: 'page-slides',
    templateUrl: 'slides.html'
})

export class SlidesPage implements OnInit {

    @ViewChild(Slides) ionSlides: Slides;

    config: PageSlides;
    slides: PageSlide[] = [];
    lastSlide: PageSlide;

    //通过private关键字在构建器中声明并传入
    constructor(
        private logger: Logger,
        private nav: NavController,
        private routerConfig: RouterConfig,
        public settings: Settings,
        private navParams: NavParams) {}

    ngOnInit() {
        this.config = APPSLIDESCONFIG;
        if (!this.config || !this.config.slides || this.config.slides.length === 0) {
            this.logger.error('slides.page:please config the page slides config!');
            return;
        }

        var slides = this.config.slides,
            length = slides.length;

        if (length == 1) {
            this.lastSlide = this.config.slides[0];
        }
        else if (length > 1) {
            this.slides = this.config.slides.slice(0, length - 1);
            this.lastSlide = this.config.slides.slice(-1)[0];
        }
    }

    ngAfterViewInit() {
        this.ionSlides.lockSwipeToPrev(true);
    }

    slideSelected() {
        this.nav.push(this.routerConfig.rootPage, {});
        this.settings.setValue('guidePage', false);
    }

}