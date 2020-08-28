import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { SearchResultComponent } from './search-result/search-result.component';

import * as imagesReducer from '../store/reducers/images.reducer';
import * as collectionsReducer from '../store/reducers/collections.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { ImagesEffects } from '../store/effects/images.effects';
import { CollectionsEffects } from '../store/effects/collections.effects';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AddToCollectionWindowComponent } from './add-to-collection-window/add-to-collection-window.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageCardComponent,
    SearchResultComponent,
    HomePageComponent,
    CollectionPageComponent,
    NotFoundPageComponent,
    AddToCollectionWindowComponent,
    CreateCollectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("imagesFeature", imagesReducer.reducer),
    StoreModule.forFeature("collectionsFeature", collectionsReducer.reducer),
    EffectsModule.forRoot([ImagesEffects, CollectionsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NoopAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
