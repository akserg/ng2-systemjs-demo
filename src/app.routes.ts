import { provideRouter, RouterConfig }  from '@angular/router';

import {HomeDemo} from './home';
import {ToastDemo} from './toast';
import {DndDemo} from './dnd';
import {SlimDemo} from './slim';

const routes: RouterConfig = [
  {path: '',        component: HomeDemo},
  {path: 'toasty',  component: ToastDemo},
  {path: 'dnd',     component: DndDemo},
  {path: 'slim',    component: SlimDemo}
];

export const appRouterProviders = [
  provideRouter(routes)
];