import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {PageEvent} from '@angular/material/paginator';
import { AppState } from '../../store/interfaces/app.state.interfaces';
import { selectNavigation } from '../../store/selectors/search.selectors';
import { getAllImages } from '../../store/actions/search.actions';

@Component({
  selector: 'app-search-navigation',
  templateUrl: './search-navigation.component.html',
  styleUrls: ['./search-navigation.component.scss']
})
export class SearchNavigationComponent implements OnInit {
  private getNavigation$;
  navigation = null;
  pageEvent: PageEvent;


  ngOnInit(): void {
    this.getNavigation$ = this.store.pipe(select(selectNavigation))
      .subscribe(navigation => { this.navigation = navigation });
  }

  hasNextPage() {
    console.log('hello');
  }

  hasPreviousPage(){

  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.store.dispatch(getAllImages({query: this.navigation.searchRequest, pageNumber: event.pageIndex}));
    return event;
  }

  ngOnDestroy(): void {
    this.getNavigation$.unsubscribe();
  }

  constructor(private store: Store<AppState>) { }
}
