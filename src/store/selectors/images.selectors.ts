import { createSelector } from '@ngrx/store';
import { ImagesState } from '../interfaces/images.state.intefaces';
import { selectImagesFeature } from './app.state.selectors'

export const selectAllImages = createSelector(
    selectImagesFeature,
    (state: ImagesState) => state.images
);