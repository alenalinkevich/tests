import { createAction, props } from '@ngrx/store';
import { Image } from '../interfaces/search.state.intefaces'


export const getAllImages = createAction('[Search] Get images from server', props<{ query: string, pageNumber: number }>());

export const loadAllImagesSuccess = createAction('[Search] Images was loaded', 
props<{ results: Image[], currentPage: number, total: number, total_pages: number}>());

export const loadAllImagesFailed = createAction('[Search] Something happened');



