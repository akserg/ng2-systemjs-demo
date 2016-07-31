// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponents} from './app.component';

bootstrap(AppComponents, [
    appRouterProviders,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    disableDeprecatedForms(),
    provideForms()
]).catch(err => console.error(err));
