import {Component, computed, input} from '@angular/core';
import {
  MatCard,
  MatCardContent, MatCardFooter,
  MatCardHeader, MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {RepositoryManifest} from '../../../domain/model/repository-manifest.entity';
import {Cinode} from '../../../domain/model/ci-node.entity';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardFooter,
    TranslatePipe
  ],
  selector: 'app-ci-node-summary',
  styleUrl: './ci-node-summary.css',
  templateUrl: './ci-node-summary.html',
})
export class CiNodeSummary {
  node = input.required<Cinode>();
  manifests = input<RepositoryManifest[]>([]);

  totalAllocated = computed(() =>
    this.manifests().reduce(
      (total, manifest) => total + manifest.allocatedSizeGb,
      0
    )
  );

  availableCapacity = computed(() =>
    this.node().maxStorageCapacityGb - this.totalAllocated()
  );

  utilization = computed(() =>
    this.node().maxStorageCapacityGb === 0
      ? 0
      : this.totalAllocated() / this.node().maxStorageCapacityGb * 100
  );

  status = computed(() => {
    const percentage = this.utilization();

    if (percentage >= 100) return 'Critical';
    if (percentage >= 75) return 'Warning';
    return 'Normal';
  });
}
