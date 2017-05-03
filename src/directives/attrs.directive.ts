import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[attrs]' })
/** attrs add attr attached element , if attr is true 
 * 添加attrs指令用于添加 HTML DOM Element 元素的属性
 * 当元素属性值为true时添加，其他情况不添加。
 * 不同于angular的attr指令
*/
export class AttrsDirective implements OnInit {

    @Input('attrs') private attrs: JSON;
    //HTML DOM Element
    el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        var attrs = this.attrs,
            el = this.el;

        console.dir(attrs);
        if (this.attrs) {
            for (var i in attrs) {
                if (attrs[i] === true) {
                    console.log(i);
                    el.nativeElement.setAttribute(i,"");
                }
            }
        }
    }



}