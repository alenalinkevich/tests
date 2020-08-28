import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/interfaces/app.state.interfaces'
import { createNewCollection } from '../../store/actions/collections.actions';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {

  collectionName = '';
  collectionDescription = '';

  ngOnInit(): void {
  }

  @Output() createCollection= new EventEmitter<boolean>();

  createCollectionRequest() {
    this.store.dispatch(createNewCollection({
      name: this.collectionName, description:
        this.collectionDescription
    }
    ));
    this.createCollection.emit(false);
  }

  constructor(
    private store: Store<AppState>
  ) { }
}
