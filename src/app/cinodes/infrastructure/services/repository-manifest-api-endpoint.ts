import {RepositoryManifestAssembler} from '../assembler/repository-manifest.assembler';
import {map} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepositorytManifestResource} from '../resource/repositoryt-manifest.resource';


@Injectable({ providedIn: 'root' })
export class RepositoryManifestsApiEndpoint {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<RepositorytManifestResource[]>(
      `${environment.BaseUrl}/repository-manifests`
    ).pipe(
      map(data => data.map(item =>
        RepositoryManifestAssembler.toEntity(item)
      ))
    );
  }
}
