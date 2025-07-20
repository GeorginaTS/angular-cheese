import { Routes } from '@angular/router';
import { Home } from '@/pages/home/home';
import { About } from '@/pages/about/about';
import { FormatgeDetail } from '@/formatges/formatge-detail';
import { Notfound } from './pages/notfound/notfound';
import { FormatgeAdd } from './formatges/crud/formatge-add';
import { FormatgeUpdate } from './formatges/crud/formatge-update';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'formatges/add',
    component: FormatgeAdd,
    title: 'Add Formatge',
  },
  {
    path: 'formatges/update/:id',
    component: FormatgeUpdate,
    title: 'Add Formatge',
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
    path: 'about',
    component: About,
    title: 'About page',
  },
  {
    path: '**',
    component: Notfound,
    title: 'Page not found',
  },
];
