import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
