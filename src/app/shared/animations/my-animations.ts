import { animate, animateChild, query, stagger, style, transition, trigger } from "@angular/animations";

// to enable "stagger" effect on a list of animation - it has to be triggered on a parent DOM element
// the trigger "@myListAnimation" is located in todo-container.component.html
export const myListAnimation = trigger('myListAnimation', [ // animates DOM elements that have @myListAnimation
  transition('* => *', [ // applies when any change between two states takes place
    query('@myFadeIn', [ // @myFadeIn is triggered from child elements (query or finds inner elements with this trigger 'myFadeIn')
      stagger('0.2s', animateChild()) // animate child instead of animating a parent with @myListAnimation trigger
    ])
  ])
]);

// (see also todo-container.component.ts)
// the trigger "@myFadeOut" is located in todo-container.component.html
export const myFadeOut = trigger('myFadeOut', [ // animates DOM elements that have @myFadeOut if transition to state ('leave') is met
  transition(':leave', [ // ! triggers of :leave transition should not be put directly on an element being removed
    animate('0.5s ease-out', style({ opacity: 0, transform: 'rotate(-30deg) translateX(50%)' })) // ! else this animate not work will not because the element is already removed along with the trigger
  ])
]);

// (see also todo.component.ts)
// the trigger "@myFadeIn" is located in todo.component.html
export const myFadeIn = trigger('myFadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50%)', background: 'lightskyblue' }),
    animate('0.5s cubic-bezier(0, 1.4, 1, 1)')
  ])
]);

export const fromTop = trigger('fromTop', [
  transition(':enter', [
    style({ transform: 'translateY(-200%)' }),
    animate('1s 1s ease-in-out')
  ])
]);