// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {ToastyService, ToastyConfig} from 'ng2-toasty/ng2-toasty';

import {HelloApp} from './hello';

// Instantiate ToastyService in the bootstrap so that we can keep it as a singleton
bootstrap(HelloApp, [
    ROUTER_PROVIDERS, FORM_PROVIDERS,
    ToastyService, ToastyConfig
]);
