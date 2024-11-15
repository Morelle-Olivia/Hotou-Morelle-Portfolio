import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [RouterModule, RouterLink, TranslateModule, CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {

  myProjects = [
    {
      projectTitle: 'Project.portfolio_website',
      projectDesc: "Project.project_desc1",
      projectPicture: "/assets/images/portfolio.png",
      link: "https://hotou-morelle-portfolio-8sbv.vercel.app",
      tools: [
        {
          tool: "Angular",
        },
        {
          tool: "TypeScript"
        },
        {
          tool: "HTML & CSS"
        },
        {
          tool: "Tailwind"
        }
      ]
    },
    {
      projectTitle: 'Project.shortly_website',
      projectDesc: "Project.project_desc2",
      projectPicture: "/assets/images/shortly_pic.png",
      link: "https://morelle-olivia.github.io/shortly-web-app/#",
      tools: [
        {
          tool: "Angular",
        },
        {
          tool: "TypeScript"
        },
        {
          tool: "HTML & CSS"
        },
        {
          tool: "Bootstrap"
        }
      ]
    },
    {
      projectTitle: 'Project.student_conquest',
      projectDesc: "Project.project_desc3",
      projectPicture: "/assets/images/stuco-blog.png",
      link: "https://stuco.vercel.app/",
      tools: [
        {
          tool: "Angular",
        },
        {
          tool: "TypeScript"
        },
        {
          tool: "HTML & CSS"
        },
        {
          tool: "Bootstrap"
        }
      ]
    }
  ]
}
