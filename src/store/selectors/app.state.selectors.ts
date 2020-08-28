import { AppState } from '../interfaces/app.state.interfaces';

export const selectImagesFeature = (state: AppState) => state.imagesFeature;
export const selectCollectionsFeature = (state: AppState) => state.collectionsFeature;