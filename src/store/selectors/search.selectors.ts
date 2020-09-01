import { createSelector } from '@ngrx/store';
import { SearchState } from '../interfaces/search.state.intefaces';
import { selectSearchFeature } from './app.state.selectors'

export const selectAllImages = createSelector(
    selectSearchFeature,
    (state: SearchState) => state.results
);

export const selectNavigation = createSelector(
    selectSearchFeature,
    (state: SearchState) => {
        return {
            searchRequest: state.searchRequest,
            total: state.total,
            total_pages: state.total_pages,
            currentPage: state.currentPage
        }
    }
);