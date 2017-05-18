import { NgModule } from '@angular/core';
import { AttrsDirective } from '../directives/attrs.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [TranslateModule],
    declarations: [AttrsDirective],
    exports: [AttrsDirective,
        TranslateModule]
})
export class SharedModule { }