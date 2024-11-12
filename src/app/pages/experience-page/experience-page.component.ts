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
  myProjects = [
    {
      "projectTitle1": 'Project.portfolio_website',
      "projectDesc1": "project_desc1",
      "projectPicture": "/assets/images/portfolio.png"
    }
  ]

}
