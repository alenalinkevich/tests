import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';
import { CollectionsService } from '../../app/collections.service';
import {getAllImages, loadAllImagesSuccess} from '../actions/search.actions';
import { from } from 'rxjs';
 
@Injectable()
export class SearchEffects {
  loadAllImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllImages),
      switchMap((action) => from(this.collectionsService.searchPhotos(action.query, action.pageNumber)).pipe(
        map(images => { console.log(images); return loadAllImagesSuccess( {currentPage: images.currentPage,
           total: images.total, total_pages: images.total_pages, 
           results: images.results})})
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private collectionsService: CollectionsService
  ) {}
}