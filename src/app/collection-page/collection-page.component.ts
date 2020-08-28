import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../collections.service';
import { Store, select } from '@ngrx/store';
import { selectIsUserAuthorized } from '../../store/selectors/collections.selector';
import { AppState } from '../../store/interfaces/app.state.interfaces';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {

  private isAuthorized$;

  ngOnInit(): void {
    this.isAuthorized$ = this.store.pipe(select(selectIsUserAuthorized)).subscribe(isAuthorized => {
      if (!isAuthorized) {
        window.open(this.collectionsService.buildAutentificationString(), "_self");
      }
    })
  }

  ngOnDestroy(): void {
    this.isAuthorized$.unsubscribe();
  }


  constructor(
    private collectionsService: CollectionsService,
    private store: Store<AppState>
  ) { }
}
