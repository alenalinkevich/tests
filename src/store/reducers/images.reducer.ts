import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ImagesState } from '../interfaces/images.state.intefaces';
import { loadAllImagesSuccess } from '../actions/images.actions';

export const initialState = {
    images: [],
    error: false,
};

export const searchFeatureKey = 'images';

const imagesReducer: ActionReducer<ImagesState> = createReducer(
    initialState,
    on(loadAllImagesSuccess, (state, { images }) => ({
        ...state,
        images,
        error: false
    })),
);

export function reducer(state: ImagesState, action: Action): ImagesState {
    return imagesReducer(state, action);
}