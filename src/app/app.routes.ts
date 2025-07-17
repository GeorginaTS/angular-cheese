import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { FormatgeDetail } from './formatges/formatge-detail';

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
  // {
  //   path: 'formatges/add',
  //   component: Home,
  //   title: 'Add page',
  // },
  {
    path: 'about',
    component: About,
    title: 'About page',
  }
];
