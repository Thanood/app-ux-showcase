import {inject} from 'aurelia-dependency-injection';
import {bindable, children} from 'aurelia-templating';
import {DOM} from 'aurelia-pal';
// import { StyleEngine } from 'aurelia-ux/styles/style-engine';
// import { Themable } from '../../styles/themable';
// import { processDesignAttributes } from '../../designs/design-attributes';
import {UxTab} from './ux-tab';

@inject(DOM.Element)
export class UxTabs {
  @children('ux-tab') tabs: UxTab[];
  activeTab: UxTab;
  @bindable() uxTabAlign = 'center'; 
  tabBar;

  constructor(private element: Element) { }

  attached() {
    this.activeTab = this.tabs[0];
    this.activeTab.active = true;
  }

  tabsChanged(newValue) { }

  setActive(tab) {
    this.activeTab.active = false;
    this.activeTab = tab;
    this.activeTab.active = true;
    fireEvent('change', this.element, { activeTab: this.activeTab });
  }
}

function fireEvent(name: string, element: Element, data?: any) {
  let event = new CustomEvent(name, {
    bubbles: true,
    detail: data
  });
  element.dispatchEvent(event);
}
