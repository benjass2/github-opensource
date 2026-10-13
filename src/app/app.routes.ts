import {Routes} from '@angular/router';
import {Home} from './shared/presentation/views/home/home';
import {PageNotFound} from './shared/presentation/views/page-not-found/page-not-found';
import {Layout} from './shared/presentation/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: '**', component: PageNotFound }
    ]
  }
];
