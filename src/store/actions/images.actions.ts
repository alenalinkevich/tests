import { createAction, props } from '@ngrx/store';
import { Image } from '../interfaces/images.state.intefaces'


export const getAllImages = createAction('[Images] Get images from server', props<{ query: string }>());

export const loadAllImagesSuccess = createAction('[Images] Images was loaded', props<{ images: Image[]}>());

export const loadAllImagesFailed = createAction('[Images] Something happened');
