import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../../app/auth.service';
import { buildAuthString, buildAuthStringSuccess } from '../actions/auth-actions';

@Injectable()
export class AuthEffects {
 /* buildAuthString$ = createEffect(() =>
    this.actions$.pipe(
      ofType(buildAuthString),
      
    )
  );
  }*/

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}