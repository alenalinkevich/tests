import { createAction, props } from '@ngrx/store';
import { Collection } from '../interfaces/collections.state.interface'

export const userAuthentication = createAction('[Auth] user aurenrification',  props<{ authToken: string }>());

export const userAuthenticationSuccess = createAction('[Auth] user aurenrification success');

export const createNewCollection = createAction('[Collection] create new collection', props<{ name: string, description: string }>());

export const collectionCreateSuccess = createAction('[Collection] collection was created successfull', props<{ collection: Collection }>());

export const getAllCollections = createAction('[Collection] Get collections from server');

export const loadAllCollectionsSuccess = createAction('[Collection] Collections was loaded', props<{ collections: Collection[]}>());

export const loadAllCollectionsFailed = createAction('[Collection] Something happened');

export const addPictureTCollection = createAction('[Collection] adding picture to collection', props<{ collectionId: string, photoId: string }>());

export const addPictureTCollectionSuccess = createAction('[Collection] adding picture to collection was successfull', props<{ collectionId: string, photoId: string }>());