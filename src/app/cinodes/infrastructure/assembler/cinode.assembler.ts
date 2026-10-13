import {CinodeResource} from '../resource/ci-node.resouce';
import {Cinode} from '../../domain/model/ci-node.entity';

export class CinodeAssembler{
  static toEntity(resource:CinodeResource):Cinode{
    return{...resource};
  }
}
