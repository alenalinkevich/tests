import { createAction, props } from '@ngrx/store';
import { Image } from '../interfaces/search-state.intefaces'


/* Get images from server */
export const getAllImages = createAction('[Search Page] Get images from server', props<{ query: string }>());

/* If images was loaded successfull*/
export const loadAllImagesSuccess = createAction('[Search Page] Images was loaded', props<{ images: Image[]}>());

/* If images was not loaded*/
export const loadAllImagesFailed = createAction('[Search Page] Something happened');
