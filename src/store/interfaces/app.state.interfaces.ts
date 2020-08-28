import { ImagesState } from './images.state.intefaces';
import { CollectionsState } from './collections.state.interface';

export interface AppState {
    imagesFeature: ImagesState;
    collectionsFeature: CollectionsState;
}