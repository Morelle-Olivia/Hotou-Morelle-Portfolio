import {Routes} from '@angular/router';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ExperiencePageComponent} from './pages/experience-page/experience-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ui/about', pathMatch: 'full' },
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'ui/about',
        component: AboutPageComponent
      },
      {
        path: 'ui/experience',
        component: ExperiencePageComponent
      }
    ]
  },
];
