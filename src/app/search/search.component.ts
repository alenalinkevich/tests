import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/interfaces/app.state.interfaces'
import { getAllImages } from '../../store/actions/search.actions';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent {
    
    searchRequest = '';

    searchImages(searchRequest: string){
        this.store.dispatch(getAllImages({query: searchRequest, pageNumber: 1}));
    }

    constructor(private store: Store<AppState>) {}
}