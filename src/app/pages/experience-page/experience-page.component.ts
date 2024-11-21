import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [RouterModule, RouterLink, TranslateModule, CommonModule],
  providers: [TranslateService],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
  // myProjects: any[] = [];

  constructor(private translationService: TranslateService) {

  }
  myExperiences = [
    {
      experienceTitle1: 'HOME.frontend_developer',
      experienceDesc1: "Experience.experience_desc1",
      startDate: "2022",
      endDate: "Experience.present",
      link: "https://catucstudent.online/"
    },
    {
      experienceTitle1: 'Experience.intern_frontend_developer',
      experienceDesc1: "Experience.experience_desc2",
      startDate: "11/2021",
      endDate: "02/2022"
    },
    {
      experienceTitle1: 'Experience.trainee_frontend_developer',
      experienceDesc1: "Experience.experience_desc3",
      startDate: "07/2021",
      endDate: "10/2021"
    }
  ]

}
