// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd} from '@angular/router';

import {SlimLoadingBarComponent, SlimLoadingBarService} from 'ng2-slim-loading-bar';

import {ToastCommunicationService} from './toast-communication.service';

@Component({
  selector: 'demo-app',
    template:`
<a href="https://github.com/akserg"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
<header>
    <div class="container">
        <ul class="navbar-list">
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['/']">Home</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['/toasty']">Toasty</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['/dnd']">Drag-and-Drop</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['/slim']">Slim Loading Bar</a></li>
        </ul>

    </div>
</header>

<router-outlet></router-outlet>
<ng2-toasty [position]="position"></ng2-toasty>
<ng2-slim-loading-bar></ng2-slim-loading-bar>
`
})
export class AppComponent {
    private sub: any;
    private position: string;

    constructor(private slimLoader: SlimLoadingBarService, private router: ActivatedRoute, private toastCommunicationService: ToastCommunicationService) {
        // We listen the position's changes
        this.toastCommunicationService.position$.subscribe(pos => this.position = pos);
    }

    ngOnInit(): any {
        this.runSlimLoader();
        this.sub = this.router.url.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.runSlimLoader();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }

    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }

    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
    }
}
