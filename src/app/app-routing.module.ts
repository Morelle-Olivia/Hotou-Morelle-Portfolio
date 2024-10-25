import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AboutPageComponent,
  //   children: [
  //     {
  //       path: 'ui/about',
  //       component: AboutPageComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'ui/about',
  //   component: AboutPageComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
