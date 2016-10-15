// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { ToastyModule } from 'ng2-toasty';
import { DndModule } from 'ng2-dnd';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { HomeComponent } from './home.component';
import { SlimComponent } from './slim.component';
import { DndComponent } from './dnd.component';

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing,
        ToastyModule.forRoot(), DndModule.forRoot(), SlimLoadingBarModule.forRoot()],
    declarations: [AppComponent, HomeComponent, SlimComponent, DndComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
