import { Component, input, output, inject } from '@angular/core';
import { NgOptimizedImage, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CarService } from './car.service';
import { ReversePipe } from './reverse.pipe';
// UPDATING COMPONENT EXAMPLES //
// *adding city = 'San Francisco';
// *adding template: `Hello {{ city }} , {{ 1 + 1 }}`,

// @Component ({
//   selector: 'app-root',
//   template: `Hello {{ city }} , {{ 1 + 1 }}`,
//   template: `Hello Universe`,
//   styles: `
//     :host {
//       color: #a144eb;
//     }
//   `,
// })
// export class App {
//   city = 'San Francisco';
// }


// COMPONENT COMPOSITION //
// *adding reference to User: template: `<app-user />`, imports: [User]
// *adding markup: template: `<section><app-user /></section>`,

// @Component({
//   selector: 'app-user',
//   template: ` Username: {{ username }}`,
// })
// export class User {
//   username = 'youngTech';
// }

// @Component({
//   selector: 'app-root',
//   template: `<section><app-user /></section>`,
//   imports:[User],
// })
// export class App {}


// CONTROL FLOW IN COMPONENTS - @if //
// *creating property: isServerRunning = true;
// *using @if: @if(isServerRunning)
// *using @else

// @Component({
//   selector: 'app-root',
//   template: ` 
//   @if(isServerRunning) {
//     <span>Yes, the server is running</span>
//   } @else {
//     <span>No, the server is not running</span>
//   }
//   `,
// })
// export class App {
//   isServerRunning = true;
// }


// CONTROL FLOW IN COMPONENTS - @for //
// *adding users property 
// *updating template: use @for

// @Component({
//   selector: 'app-root',
//   template: `
//     @for (user of users; track user.id) {
//       <p>{{ user.name }}</p>
//     }
//   `,
// })
// export class App {
//   users = [
//     {id: 0, name: 'Sarah'},
//     {id: 1, name: 'Amy'},
//     {id: 2, name: 'Rachel'},
//     {id: 3, name: 'Jessica'},
//     {id: 4, name: 'Poornima'},
//   ];
// }


// PROPERTY BINDING //
// *adding property: isEditable
// *binding to contentEditable

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.css'],
//   template: ` <div [contentEditable]="isEditable"></div>`,
// })
// export class App {
//   isEditable = true;
// }


// EVENT HANDLING //
// *adding event handling: 
// *binding template event: 

// @Component({
//   selector: 'app-root',
//   template: `
//     <section (mouseover)="showSecretMessage()">
//       There's a secret message for you, hover to reveal 👀
//       {{ message }}
//     </section>
//   `
// })
// export class App {
//   message = '';

//   showSecretMessage() {
//     this.message = 'Way to go 🚀';
//   }
// }


// COMPONENT INPUT PROPERTIES //
// *defining input() property
// *passing value to input()
// ** WE CAN IMPORT FROM ANOTHER FILE NAMED user.ts: import {User} from './user';

// @Component({
//   selector: 'app-user',
//   template: ` <p>The user's name is {{ name() }}</p> `
// })
// export class User {
//   name = input<string>();
// }

// @Component({
//   selector: 'app-root',
//   template: ` <app-user name="Simran" />`,
//   imports: [User],
// })
// export class App {}


// COMPONENT OUTPUT PROPERTIES //
// *adding output() property 
// *completing addItem method
// *updating the App template

// @Component({
//   selector: 'app-child',
//   styles: `
//     .btn {
//       padding: 5px;
//     }
//   `,
//   template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
// })
// export class Child {
//   addItemEvent = output<string>();

//   addItem() {
//     this.addItemEvent.emit('🐢');
//   }
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event)"/>
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   imports: [Child],
// })
// export class App {
//   items = new Array();

//   addItem(item: string) {
//     this.items.push(item);
//   }
// }


// DEFERRABLE VIEWS //
// *adding @defer block around the comments component
// *adding placeholder
// * adding loading block
// *adding min duration
// *adding viewport trigger
// *adding content
// **There's even more you can do with them, like different triggers, prefetching, and blocks.@error

// @Component({
//   selector:'comments',
//   template: `
//     <ul>
//       <li>Building for the web is fantastic!</li>
//       <li>The new template syntax is great</li>
//       <li>I agree with the other comments!</li>
//     </ul>
//   `,
// })
// export class Comments {}

// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <h1>How I feel about Angular</h1>
//       <article>
//         <p>
//           Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//           feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//           The Angular community is also filled with amazing contributors and experts that create excellent
//           content. The community is welcoming and friendly, and it really is the best community out there.
//         </p>
//         <p>
//           I can't express enough how much I enjoy working with Angular. It offers the best developer
//           experience I've ever had. I love that the Angular team puts their developers first and takes
//           care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//           they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//           all copied and pasted. In fact, I think I'll say these exact same things again a few times.
//         </p>
//         <p>
//           Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//           feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//           The Angular community is also filled with amazing contributors and experts that create excellent
//           content. The community is welcoming and friendly, and it really is the best community out there.
//         </p>
//         <p>
//           I can't express enough how much I enjoy working with Angular. It offers the best developer
//           experience I've ever had. I love that the Angular team puts their developers first and takes
//           care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//           they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//           all copied and pasted. In fact, I think I'll say these exact same things again a few times.
//         </p>
//         <p>
//           Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//           feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//           The Angular community is also filled with amazing contributors and experts that create excellent
//           content. The community is welcoming and friendly, and it really is the best community out there.
//         </p>
//         <p>
//           I can't express enough how much I enjoy working with Angular. It offers the best developer
//           experience I've ever had. I love that the Angular team puts their developers first and takes
//           care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//           they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//           all copied and pasted.
//         </p>
//       </article>
//       @defer (on viewport){
//         <comments />
//       } @placeholder {
//         <p>Future comments</p>
//       } @loading (minimum 2s) {
//         <p>Loading comments...</p>
//       } 
//     </div>
//   `,
//   imports: [Comments],
// })
// export class App {}


// OPTIMIZING IMG //
// *importing the NgOptimizedImage directive
// *updating the src attribute to be ngSrc
// *adding width and height attributes:
//   => In situations where you can't or don't want to specify a static height and width for images, you can use the fill attribute to tell the image to act like a "background image", filling its containing element:
//     <div class="image-container">
//       <img ngSrc="www.example.com/image.png" fill />
//     </div>
//   => For the fill image to render properly, its parent element must be styled with position: "relative", position: "fixed", or position: "absolute".
// **prioritzing important imgs: To optimize your loading times, make sure to add the priority attribute to your "hero image" or any other images that you think could be an LCP element.
// **OPTIONAL: using an img loader:
//   providers: [provideImgixLoader('https://my.base.url/')],
//   <img ngSrc="image.png" height="600" width="800" />

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>Preferred Framework:</p>
//     <ul>
//       <li>Static Image:
//         <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" priority />
//       </li>
//       <li>
//         Dynamic Image:
//         <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
//       </li>
//     </ul>
//   `,
//   imports: [NgOptimizedImage],
// })
// export class User {
//   logoUrl = '/logo.svg';
//   logoAlt = 'Angular logo';
//   username = 'youngTech';
// }


// ROUTING OVERVIEW //
// *creating an app.routs.ts file
// *adding routing to provider
// *importing RouterOutlet in the component

// @Component({
//   selector: 'app-root',
//   template: `
//     <nav>
//       <a routerLink="/">Home</a>
//       |
//       <a routerLink="/user">User</a>
//     </nav>
//     <router-outlet />
//   `,
//   imports: [RouterLink, RouterOutlet],
// })
// export class App {}


// DEFINE A ROUTE // <- this work in another file
// *defining a route in app.routes.ts
// *adding title to route definition


// USE RouterLink FOR NAVIGATION // <- did it in previous code in ROUTING OVERVIEW
// *importing RouterLink directive, adding to imports
// *adding routerLink to template: replace href with routerLink


// FORM OVERVIEW //
// *creating an input field
// *importing FormsModule
// *addding binding to the value of the input

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <!-- <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p> -->
//     <p>Framework: {{ favoriteFramework }}</p>
//     <label for="framework">
//       Favorite Framework:
//       <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
//     </label>
//     <button (click)="showFramework()">Show Framework</button>
//   `,
//   imports: [FormsModule],
// })
// export class User {
//   favoriteFramework = '';
//   username = 'youngTech';

//   showFramework() {
//     alert(this.favoriteFramework);
//   }
// }


// GETTING FORM CONTROL VALUE // <- did it in previous code above
// *showing the value of the input field in the template
// *retrieving the value of an input field


//  REACTIVE FORMS //
// *importing ReactiveForms module
// *creating the FormGroup object with FormControls
// *linking the FormGroup and FormControls to the form
// *handling update to the form
// *accessing FormGroup values
// *adding ngSubmit to the form

// @Component({
//   selector: 'app-root',
//   template: `
//     <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
//       <label>
//         Name
//         <input type="text" formControlName="name" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" formControlName="email" name="email" />
//       </label>
//       <button type="submit" [disabled]="!profileForm.valid">Submit</button>
//     </form>
    
//     <h2>Profile Form</h2>
//     <p>Name: {{ profileForm.value.name }}</p>
//     <p>Email: {{ profileForm.value.email }}</p>
//   `,
//   imports: [ReactiveFormsModule],
// })
// export class App {
//   profileForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//   });

//   handleSubmit() {
//     alert(
//       this.profileForm.value.name + ' | ' + this.profileForm.value.email
//     );
//   }
// }


// VALIDATING FORMS // <- did it in previous code above
// *importing validators
// *adding validation to form
// *checking form validation in template


// CREATING INJECTABLE SERVICE //
// *adding @Injectable decorator
// *configuring the decorator

// @Component({
//     selector: 'app-root',
//     template: `
//         <!-- <p>Car Listing: {{ carService.getCars() }} </p> -->
//         <p>Car Listing: {{ display }} </p>
//     `,
// })
// export class App {
//     carService = inject(CarService);
//     display = this.carService.getCars().join(' ⭐ ');
// }


// INJECT-BASED DEPENDENCY INJECTION // <- did it in previous code above
// *injecting carService
// *using carService instance
// *updating App template


// PIPES //
// *importing LowerCase pipe
// *adding pipe to template imports
// *adding pipe to template

// @Component({
//     selector: 'app-root',
//     template: ` {{ username | lowercase}} `,
//     imports: [LowerCasePipe],
// })
// export class App {
//     username = 'youngTECH';
// }


// FORMATTING DATA WITH PIPES //
// *formatting number with DecimalPipe
// *formatting date with DatePipe
// *formatting currency with CurrencyPipe

// @Component({
//     selector: 'app-root',
//     template: `
//         <ul>
//             <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
//             <li>Date with "date" {{ bithday | date: 'medium' }}</li>
//             <li>Currency with "currency" {{ cost | currency}}</li>
//         </ul>
//     `,
//     imports: [DatePipe, DecimalPipe, CurrencyPipe],
// })
// export class App {
//     num = 103.1234;
//     bithday = new Date(2023, 3, 2);
//     cost = 4560.34;
// }


// CREATE CUSTOM PIPE //
// *creating ReversePipe
// *impementing transform function
// *using ReversePipe in the template

// @Component({
//     selector: 'app-root',
//     template: `
//         Reverse Machine: {{ word | reverse}}
//     `,
//     imports: [ReversePipe],
// })
// export class App {
//     word = 'You are a champion';
// }