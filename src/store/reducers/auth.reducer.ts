import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { AuthState } from '../interfaces/auth-state.interface';
import { getAuthStringSuccess } from '../actions/auth-actions';

export const initialState = {
    key: null,
    error: false,
};

export const searchFeatureKey = 'search';

const searchReducer: ActionReducer<AuthState> = createReducer(
    initialState,
    on(getAuthStringSuccess, (state, { key }) => ({
        ...state,
        key,
        error: false
    })),
);

export function reducer(state: AuthState, action: Action): AuthState {
    return searchReducer(state, action);
}