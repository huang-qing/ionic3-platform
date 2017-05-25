import { NgModule } from '@angular/core';
import { AttrsDirective } from '../directives/attrs.directive';
import { TranslateModule } from '@ngx-translate/core';
/**
 * https://github.com/GerritErpenstein/ionic2-custom-icons
 */
import { CustomIconsModule } from 'ionic2-custom-icons';

@NgModule({
    imports: [TranslateModule, CustomIconsModule],
    declarations: [AttrsDirective],
    exports: [AttrsDirective,
        TranslateModule, CustomIconsModule]
})

export class SharedModule { }