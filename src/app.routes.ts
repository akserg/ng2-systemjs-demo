import { provideRouter, RouterConfig }  from '@angular/router';

import {HomeComponent} from './home.component';
import {ToastComponent} from './toast.component';
import {DndComponent} from './dnd.component';
import {SlimComponent} from './slim.component';

const routes: RouterConfig = [
  {path: '',        component: HomeComponent},
  {path: 'toasty',  component: ToastComponent},
  {path: 'dnd',     component: DndComponent},
  {path: 'slim',    component: SlimComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];