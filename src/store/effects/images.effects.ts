import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';
import { ImagesService } from '../../app/images.service';
import {getAllImages, loadAllImagesSuccess} from '../actions/images.actions';
 
@Injectable()
export class ImagesEffects {
  loadAllImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllImages),
      switchMap(query =>
        this.imagesService.getAllImages(query.query).pipe(
          map(images => loadAllImagesSuccess({images: Object.values(images)}))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private imagesService: ImagesService
  ) {}
}