// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {Toasty} from 'ng2-toasty/ng2-toasty';
import {SlimLoadingBar, SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {Menu, NavItem} from 'ng2-navigation/ng2-navigation';

import {HomeDemo} from './home';
import {ToastDemo} from './toast';
import {DndDemo} from './dnd';
import {SlimDemo} from './slim';

@Component({
    selector: 'hello-app',
    directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES, Toasty, SlimLoadingBar, Menu],
    template:
    `
<a href="https://github.com/akserg"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
<header>
    <div class="container">
        <ul class="navbar-list">
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Home']">Home</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Toasty']">Toasty</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Dnd']">Drag-and-Drop</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Slim']">Slim Loading Bar</a></li>
        </ul>
    </div>
</header>

<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle"
                (click)="navCollapsed = !navCollapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" [routerLink]="Home">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" ng-class="!navCollapsed && 'in'">



        <ul class="nav navbar-nav">
            <li dropdown>
                <a href id="simple-dropdown" dropdownToggle>
                    Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="simple-dropdown">
                    <li *ngFor="#choice of items">
                        <a class="dropdown-item" href="#">{{choice}}</a>
                    </li>
                </ul>
            </li>

            <li dropdown>
                <a href id="simple-dropdown" dropdownToggle>
                    Dropdown
                </a>
                <ng2-menu items='items'></ng2-menu>
            </li>

            <!--li uib-dropdown>
                <a href="#" uib-dropdown-toggle>
                    Dropdown
                    <b class='caret'></b>
                </a>
                <ng2-menu items='items'></ng2-menu>
            </li>
            <li uib-dropdown>
                <a href="#" uib-dropdown-toggle>
                    Just a clone
                    <span class='caret'></span>
                </a>
                <ng2-menu items='items'></ng2-menu>
            </li-->
        </ul>
        <!--ul class="nav navbar-nav navbar-right">
            <li uib-dropdown>
                <a href="#" uib-dropdown-toggle>
                    Dropdown right
                    <b class='caret'></b>
                </a>
                <ng2-menu items='items'></ng2-menu>
            </li>
            <li uib-dropdown>
                <a href="#" uib-dropdown-toggle>
                    Just a clone right
                    <span class='caret'></span>
                </a>
                <ng2-menu items='items'></ng2-menu>
            </li>
        </ul-->
    </div>
    <!-- /.navbar-collapse -->
</nav>

<div>
    <router-outlet></router-outlet>
    <ng2-toasty></ng2-toasty>
</div>
<ng2-slim-loading-bar></ng2-slim-loading-bar>
`
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeDemo },
    { path: '/toasty', name: 'Toasty', component: ToastDemo },
    { path: '/dnd', name: 'Dnd', component: DndDemo },
    { path: '/slim', name: 'Slim', component: SlimDemo }
])
export class HelloApp {

    navCollapsed: boolean = true;
    items: Array<NavItem> = [
        {
            name: "Home",
            link: ['Home'],
            items: [{
                name: "Toaty",
                link: ['Toasty']
            }, {
                    name: "Drag-and-Drop",
                    link: ['Dnd']
                }, {
                    name: "Slim",
                    link: ['Slim']
                }]
        }, {
            isDivider: true
        }, {
            name: "Toaty",
            link: ['Toasty']
        }, {
            name: "Drag-and-Drop",
            link: ['Dnd']
        }, {
            name: "Slim",
            link: ['Slim']
        }];

    constructor(private slimLoader: SlimLoadingBarService, private router: Router) {
        this.runSlimLoader();
        this.router.subscribe((value: any) => {
            this.runSlimLoader();
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }

    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 1000);
    }
}
