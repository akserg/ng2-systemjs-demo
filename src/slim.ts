// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Subject, Observable, Subscription} from 'rxjs/Rx';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

@Component({
    selector: 'slim-demo',
    template: `
<div class="container">
    <br />
    <button (click)="setProgres30()">Set progress equals 30</button>
    <button (click)="startProgress()">Start progress</button>
    <button (click)="completeProgress()">Complete progress</button>
    <button (click)="stopProgress()">Stop progress</button>
    <button (click)="resetProgress()">Reset progress</button><br>
    <button (click)="incrementProgress()">Increment progress</button>
    <button (click)="changeProgressTo4px()">Change height to 4px</button>
    <button (click)="changeProgressTo2px()">Change height to 2px</button>
    <button (click)="changeProgressToBlue()">Change color to blue</button>
    <button (click)="changeProgressToFirebrick()">Change height to firebrick</button>
</div>`
})
export class SlimDemo {

    constructor(private slimLoadingBarService:SlimLoadingBarService) { }
    
    setProgres30() {
        this.slimLoadingBarService.progress = 30;
    }
    
    startProgress() {
        // We can listen when loading will be completed 
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }
    
    completeProgress() {
        this.slimLoadingBarService.complete();
    }

    stopProgress() {
        this.slimLoadingBarService.stop();
    }
    
    resetProgress() {
        this.slimLoadingBarService.reset();
    }
    
    incrementProgress() {
        this.slimLoadingBarService.progress++;
    }
    
    changeProgressTo4px() {
        this.slimLoadingBarService.height = '4px';
    }
    
    changeProgressTo2px() {
        this.slimLoadingBarService.height = '2px';
    }
    
    changeProgressToBlue() {
        this.slimLoadingBarService.color = 'blue';
    }
    
    changeProgressToFirebrick() {
        this.slimLoadingBarService.color = 'firebrick';
    }
}
