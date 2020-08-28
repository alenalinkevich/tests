import { createSelector } from '@ngrx/store';
import { CollectionsState } from '../interfaces/collections.state.interface';
import { selectCollectionsFeature } from './app.state.selectors';


export const selectIsUserAuthorized = createSelector(
    selectCollectionsFeature,
    (state: CollectionsState) => state.isAuthorized
);

export const selectAllCollections= createSelector(
    selectCollectionsFeature,
    (state: CollectionsState) => state.collections
);