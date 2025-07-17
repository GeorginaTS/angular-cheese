import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { FormatgeDetail } from './formatges/formatge-detail';
import { Notfound } from './notfound/notfound';
import { FormatgeAdd } from './formatges/formatge-add';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
    {
    path: 'formatges',
    component: Home,
    title: 'Formatges List',
  },
  {
    path: 'formatges/:id',
    component: FormatgeDetail,
    title: 'Detail page',
  },
  {
    path: 'formatges/add',
    component: FormatgeAdd,
    title: 'Add Formatge',
  },
  {
    path: 'about',
    component: About,
    title: 'About page',
  },
  {
    path:'**',
    component: Notfound,
    title: 'Page not found',

  }
];
