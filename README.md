# LearnAngularAnimations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.
<br>

```typescript
// my-animation.ts
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
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
