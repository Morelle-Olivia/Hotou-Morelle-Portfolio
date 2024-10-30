import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterModule, RouterLink, TranslateModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
