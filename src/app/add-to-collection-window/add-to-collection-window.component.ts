import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAllCollections } from '../../store/selectors/collections.selector';
import { getAllCollections } from '../../store/actions/collections.actions'
import { AppState } from '../../store/interfaces/app.state.interfaces';
import { Collection } from '../../store/interfaces/collections.state.interface'

export interface DialogData {
  imageId: string | null;
}

@Component({
  selector: 'app-add-to-collection-window',
  templateUrl: './add-to-collection-window.component.html',
  styleUrls: ['./add-to-collection-window.component.scss']
})
export class AddToCollectionWindowComponent implements OnInit {

  isCreateCollection: boolean = false;
  collections$: Observable<Collection[]> = this.store.pipe(select(selectAllCollections));

  ngOnInit(): void {
    this.store.dispatch(getAllCollections());
  }

  createCollection(isCreate: boolean) {
    console.log(isCreate);
    this.isCreateCollection = isCreate;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private readonly store: Store<AppState>
  ) { }
}
