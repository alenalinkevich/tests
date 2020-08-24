import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { SearchState } from '../interfaces/search-state.intefaces';
import { loadAllImagesSuccess } from '../actions/seach-actions';

export const initialState = {
    images: [],
    error: false,
};

export const searchFeatureKey = 'search';

const searchReducer: ActionReducer<SearchState> = createReducer(
    initialState,
    on(loadAllImagesSuccess, (state, { images }) => ({
        ...state,
        images,
        error: false
    })),
);

export function reducer(state: SearchState, action: Action): SearchState {
    return searchReducer(state, action);
}