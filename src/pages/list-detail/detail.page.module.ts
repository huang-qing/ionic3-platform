/**
 * 
 * http://ionicframework.com/docs/components/#slides
 * http://ionicframework.com/docs/api/components/slides/Slides/
 * 
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail.page';
import { SharedModule } from '../../modules/shared.module';
import { SafeHtml } from '../../pipe/safeHtml.pipe'

@NgModule({
    declarations: [
        DetailPage,
        SafeHtml
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(DetailPage)
    ],
    exports: [],
    entryComponents: [
        DetailPage
    ]
})

export class DetailPageModule { }