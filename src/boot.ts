// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {HelloApp} from './hello';

bootstrap(HelloApp, [
    appRouterProviders,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
])
.catch(err => console.error(err));
