/**
 * http://ionicframework.com/docs/api/navigation/IonicPage/
 * 
 * Error: Could not find a class declaration in F:\ionic\ionic3-platform\src\pages\list\list.page.module.ts
 * Error: Could not find a class declaration in F:\ionic\ionic3-platform\src\pages\list\list.page.module.ts
 *  at BuildError.Error (native)
 *  at new BuildError (F:\ionic\ionic3-platform\node_modules\@ionic\app-scripts\dist\util\errors.js:16:28)
 *  at F:\ionic\ionic3-platform\node_modules\@ionic\app-scripts\dist\preprocess.js:18:21
 *  
 * listpage的module必须在同一目录路径下且名称必须与list.page.ts文件对应。文件名必须为list.page.module.ts。
 * 在执行 ionic serve 任务时，deeplinks 任务流会自动查找相应的文件完成编译
 * 
 * 
 * Component is part of the declaration of 2 modules
 * 
 * http://stackoverflow.com/questions/43598311/component-is-part-of-the-declaration-of-2-modules
 * https://www.angular.cn/docs/ts/latest/guide/ngmodule.html
 * 
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list.page';
import { IonpListComponent } from '../../components';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        ListPage,
        IonpListComponent
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(ListPage)
    ],
    exports: [],
    entryComponents: [
        ListPage,
        IonpListComponent
    ]
})
export class ListPageModule { }