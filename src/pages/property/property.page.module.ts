/**
 * 
 * http://ionicframework.com/docs/components/#slides
 * http://ionicframework.com/docs/api/components/slides/Slides/
 * 
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyPage } from './property.page';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        PropertyPage
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(PropertyPage)
    ],
    exports: [],
    entryComponents: [
        PropertyPage
    ]
})
export class PropertyPageModule { }