import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { CollectionsState } from '../interfaces/collections.state.interface';
import { userAuthenticationSuccess, collectionCreateSuccess, loadAllCollectionsSuccess } from '../actions/collections.actions';

export const initialState = {
    isAuthorized: false,
    authError:  false,
    collections: []
};

export const searchFeatureKey = 'collections';

const collectionsReducer: ActionReducer<CollectionsState> = createReducer(
    initialState,
    on(userAuthenticationSuccess, (state) => ({
        ...state,
        isAuthorized: true,
        authError:  false
    })),
    on(collectionCreateSuccess, (state, { collection }) => ({
        ...state,
        collections: [...state.collections, collection]
    })),
    on(loadAllCollectionsSuccess, (state, { collections }) => ({
        ...state,
        collections: collections
    })),
);

export function reducer(state: CollectionsState, action: Action): CollectionsState {
    return collectionsReducer(state, action);
}