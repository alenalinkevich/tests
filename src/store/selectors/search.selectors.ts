import { createSelector } from '@ngrx/store';
import { SearchState } from '../interfaces/search-state.intefaces';
import { selectSearchFeature } from './app-state.selectors'

export const selectAllImages = createSelector(
    selectSearchFeature,
    (state: SearchState) => state.images
);