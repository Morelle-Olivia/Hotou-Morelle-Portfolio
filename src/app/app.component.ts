import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HomePageComponent} from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotou-morelle-portfolio';

  // constructor(private translate: TranslateService) {
  //   this.translate.setDefaultLang('en');
  // }

  // switchLanguage(language: string) {
  //   this.translate.use(language)
  // }
}
