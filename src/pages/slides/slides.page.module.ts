/**
 * 
 * http://ionicframework.com/docs/components/#slides
 * http://ionicframework.com/docs/api/components/slides/Slides/
 * 
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesPage } from './slides.page';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        SlidesPage
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(SlidesPage)
    ],
    exports: [],
    entryComponents: [
        SlidesPage
    ]
})
export class SlidesPageModule { }