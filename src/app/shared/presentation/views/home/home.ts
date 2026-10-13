import {Component, inject, OnInit} from '@angular/core';
import {CiNodeSummary} from '../../../../cinodes/presentation/components/ci-node-summary/ci-node-summary';
import {CinodesStore} from '../../../../cinodes/application/cinodes.store';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  imports: [
    CiNodeSummary,
    TranslatePipe
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  store= inject(CinodesStore);

  ngOnInit() {
    this.store.loadData();
  }
}
