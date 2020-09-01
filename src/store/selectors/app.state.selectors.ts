import { AppState } from '../interfaces/app.state.interfaces';

export const selectSearchFeature = (state: AppState) => state.searchFeature;
export const selectCollectionsFeature = (state: AppState) => state.collectionsFeature;