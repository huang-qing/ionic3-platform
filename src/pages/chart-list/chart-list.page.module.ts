import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartListPage } from './chart-list.page';
import { IonpChartComponent } from '../../components';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        ChartListPage,
        IonpChartComponent
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(ChartListPage)
    ],
    exports: [],
    entryComponents: [
        ChartListPage,
        IonpChartComponent
    ]
})
export class ListPageModule { }