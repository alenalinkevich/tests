import { createAction, props } from '@ngrx/store';

/* Get auth string */
export const buildAuthString = createAction('[Auth] build auth string');

/* Auth finished successfull*/
export const buildAuthStringSuccess = createAction('[Auth] auth string was builded successfull', props<{ authUrl: string }>());

/* Auth finished with error*/
export const buildAuthStringFailed = createAction('[Auth] auth string was builded with error');