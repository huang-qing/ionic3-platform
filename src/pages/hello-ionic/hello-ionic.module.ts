import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloIonicPage } from './hello-ionic';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

@NgModule({
    declarations: [
        HelloIonicPage
    ],
    imports: [
        IonicPageModule.forChild(HelloIonicPage)
    ],
    entryComponents: [
        HelloIonicPage
    ]
})
export class HelloIonicPageModule { }