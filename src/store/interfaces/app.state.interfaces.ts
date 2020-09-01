import { SearchState } from './search.state.intefaces';
import { CollectionsState } from './collections.state.interface';

export interface AppState {
    searchFeature: SearchState;
    collectionsFeature: CollectionsState;
}