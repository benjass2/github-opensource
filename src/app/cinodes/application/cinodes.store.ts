import {inject, Injectable, signal} from '@angular/core';
import {Cinode} from '../domain/model/ci-node.entity';
import {CinodesApi} from '../infrastructure/services/cinodes-api';
import {RepositoryManifest} from '../domain/model/repository-manifest.entity';


@Injectable({ providedIn: 'root' })
export class CinodesStore {
  private api = inject(CinodesApi);

  nodes = signal<Cinode[]>([]);
  manifests = signal<RepositoryManifest[]>([]);

  loadData(): void {
    this.api.getNodes().subscribe(data => {
      this.nodes.set(data);
    });

    this.api.getManifests().subscribe(data => {
      this.manifests.set(data);
    });
  }

  getManifestsByNode(nodeId: string): RepositoryManifest[] {
    return this.manifests().filter(
      manifest => manifest.nodeId === nodeId
    );
  }
}
