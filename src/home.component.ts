// // Copyright (C) 2016 Sergey Akopkokhyants
// // This project is licensed under the terms of the MIT license.
// // https://github.com/akserg

import { Component } from '@angular/core';

@Component({
    selector: 'demo-home',
    template: `
<div class="container">
    <h1>Welcome to Demo</h1>
    <span>There are features implemented on Angular 2:</span>
    <ul>
        <li><a [routerLink]="['/toasty']">Toasty</a></li>
        <li><a [routerLink]="['/dnd']">Drag-and-Drop</a></li>
        <li><a [routerLink]="['/slim']">Slim Loading Bar</a></li>
    </ul>
</div>`
})
export class HomeComponent { }
