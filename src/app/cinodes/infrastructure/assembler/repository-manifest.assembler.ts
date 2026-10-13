import {RepositorytManifestResource} from '../resource/repositoryt-manifest.resource';
import {RepositoryManifest} from '../../domain/model/repository-manifest.entity';

export class RepositoryManifestAssembler {
  static toEntity(resource: RepositorytManifestResource): RepositoryManifest {
    return { ...resource };
  }
}
