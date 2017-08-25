import { Component } from '@angular/core';

import {
  trigger,
  animate,
  style,
  group,
  // animateChild, not used for this project
  query,
  // stagger, not used for this project
  transition
} from '@angular/animations';

/**
 * The '* <=> *', where the star * represents a transition state. So you can say instead, from welcome to register, do one animation, and from register to another, do another. At the moment, all the transitions will be the same.
 */
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', transform: 'translateZ(0)' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
})
export class AppComponent {
  
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
} 