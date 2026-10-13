import {Cinode} from '../../domain/model/ci-node.entity';
import {RepositoryManifest} from '../../domain/model/repository-manifest.entity'
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {CinodeResource} from '../resource/ci-node.resouce';
import {environment} from '../../../../environments/environment';
import {CinodeAssembler} from '../assembler/cinode.assembler';

@Injectable({ providedIn: 'root' })
export class CiNodesApiEndpoint {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<CinodeResource[]>(
      `${environment.BaseUrl}/ci-nodes`
    ).pipe(
      map(data => data.map(item => CinodeAssembler.toEntity(item)))
    );
  }
}
