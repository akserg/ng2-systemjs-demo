// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import {Toasty} from 'ng2-toasty/ng2-toasty';
import {SlimLoadingBar, SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import {ToastyService, ToastyConfig} from 'ng2-toasty/ng2-toasty';
import {DND_PROVIDERS} from 'ng2-dnd/ng2-dnd';

@Component({
    selector: 'hello-app',
    directives: [ROUTER_DIRECTIVES, Toasty, SlimLoadingBar],
    providers: [ToastyService, ToastyConfig, DND_PROVIDERS, SlimLoadingBarService],
    template:
    `
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


<div>
    <router-outlet></router-outlet>
    <ng2-toasty></ng2-toasty>
</div>
<ng2-slim-loading-bar></ng2-slim-loading-bar>
`
})
export class HelloApp {
    private sub: any;

    constructor(private slimLoader: SlimLoadingBarService, private router: Router) {
    }

    ngOnInit(): any {
        this.runSlimLoader();
        this.sub = this.router.events.subscribe(event => {
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
        }, 1000);
    }
}
