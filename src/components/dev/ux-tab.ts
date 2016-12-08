import {inject} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';
import {bindable} from 'aurelia-templating';

@inject(DOM.Element)
export class UxTab {
  @bindable() active = false;
  @bindable() uxTabLabel = '';
  
  constructor(private element) { }
}
