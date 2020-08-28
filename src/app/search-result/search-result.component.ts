import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllImages } from '../../store/selectors/images.selectors';
import { Image } from '../../store/interfaces/images.state.intefaces';
import { AppState } from '../../store/interfaces/app.state.interfaces';

@Component({
  selector: 'app-serach-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent {
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;
  images$: Observable<Image[]> = this.store.pipe(select(selectAllImages));

  constructor(private readonly store: Store<AppState>) { }
}
