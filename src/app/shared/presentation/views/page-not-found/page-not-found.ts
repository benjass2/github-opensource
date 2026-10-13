import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [
    TranslatePipe
  ],
  selector: 'app-page-not-found',
  styleUrl: './page-not-found.css',
  templateUrl: './page-not-found.html',
})
export class PageNotFound {}
