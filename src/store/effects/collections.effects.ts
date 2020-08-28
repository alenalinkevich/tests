import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { CollectionsService } from '../../app/collections.service';
import { Router } from '@angular/router';

import { 
  userAuthentication, 
  userAuthenticationSuccess, 
  collectionCreateSuccess, 
  createNewCollection,
  getAllCollections,
  loadAllCollectionsSuccess } from '../actions/collections.actions';


@Injectable()
export class CollectionsEffects {
  userAuthentication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAuthentication),
      switchMap((action) => from(this.collectionsService.authentificationUser(action.authToken)).pipe(
        map(() => {
          this.router.navigate([], { queryParams: null });
          return userAuthenticationSuccess()
        }
        )
      ))
    ));

  createCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewCollection),
      switchMap((action) => from(this.collectionsService.createCollection(action.name, action.description)).pipe(
        map(collection => collectionCreateSuccess({ collection }))
      ))
    ));

  getAllCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCollections),
      switchMap(() => from(this.collectionsService.getCollections()).pipe(
        map(collections => loadAllCollectionsSuccess({ collections }))
      ))
    ));

  constructor(
    private actions$: Actions,
    private collectionsService: CollectionsService,
    private router: Router,
  ) { }
}