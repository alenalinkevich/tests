import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { SearchState } from '../interfaces/search.state.intefaces';
import { loadAllImagesSuccess, getAllImages } from '../actions/search.actions';

export const initialState = {
    searchRequest: '',
    currentPage: 0,
    total: 0,
    total_pages: 0,
    results: []
};

export const searchFeatureKey = 'search';

const searchReducer: ActionReducer<SearchState> = createReducer(
    initialState,
    on(getAllImages, (state, { query, pageNumber }) => ({
        ...state,
        currentPage: pageNumber,
        searchRequest: query
    })),
    on(loadAllImagesSuccess, (state, { results, total, total_pages }) => ({
        ...state,
        results,
        total,
        total_pages
    })),
);

export function reducer(state: SearchState, action: Action): SearchState {
    return searchReducer(state, action);
}