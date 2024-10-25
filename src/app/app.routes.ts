import {Routes} from '@angular/router';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ExperiencePageComponent} from './pages/experience-page/experience-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
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
