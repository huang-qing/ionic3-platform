/**
 * Angular2 Base64 sanitizing unsafe URL value
 * https://stackoverflow.com/questions/43141534/angular2-base64-sanitizing-unsafe-url-value
 * 
 * 
 */

import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}