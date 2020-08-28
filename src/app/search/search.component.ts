import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/interfaces/app.state.interfaces'
import { getAllImages } from '../../store/actions/images.actions';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent {
    constructor(private store: Store<AppState>) {}

    searchRequest = '';

    searchImages(searchRequest: string){
        this.store.dispatch(getAllImages({query: searchRequest}));
    }

}