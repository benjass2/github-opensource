import {inject, Injectable} from '@angular/core';
import {CiNodesApiEndpoint} from './cinodes-api-endpoint';
import {RepositoryManifestsApiEndpoint} from './repository-manifest-api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class CinodesApi{
  private nodesEndpoint= inject(CiNodesApiEndpoint);
  private manifestsEndpoint = inject(RepositoryManifestsApiEndpoint);

  getNodes(){
    return this.nodesEndpoint.getAll();
  }

  getManifests(){
    return this.manifestsEndpoint.getAll();
  }


}
