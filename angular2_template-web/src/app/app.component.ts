/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { SideMenu} from './side-menu';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `  
    <div class="ui-g">
        <div class="ui-g-2 ui-g-nopad">
            <side_menu></side_menu>
        </div>
        <div class="ui-g-10 ui-g-nopad">
            <div class="ui-g-12">12</div>
            <div class="ui-g-4">4</div>
            <div class="ui-g-4">4</div>
            <div class="ui-g-4">4</div>
        </div>
    </div>
  `
})

export class App {
  loading = false;
  name = 'Angular2 Template';


  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
