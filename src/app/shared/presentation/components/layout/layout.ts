import {Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {RouterOutlet} from '@angular/router';

@Component({
  imports: [
    MatToolbar,
    MatSidenavContainer,
    MatSidenav,
    MatIcon,
    MatSidenavContent,
    RouterOutlet,
    TranslatePipe
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.use('en');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }
}
