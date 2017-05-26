import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        TabsPage
    ],
    imports: [
        IonicPageModule.forChild(TabsPage),
        SharedModule
    ],
    entryComponents: [
        TabsPage
    ]
})

export class TabsPageModule { }