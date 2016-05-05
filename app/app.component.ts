import { Component } from '@angular/core';
import { SecondComponent } from './second.component';

@Component({
    selector: 'my-app',
    directives: [SecondComponent],
    template: `
        <h1>My First Angular 2 App</h1>
        <second-component></second-component>
    `
})
export class AppComponent { }