import { Input, Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCollectionWindowComponent } from '../add-to-collection-window/add-to-collection-window.component';
import { CollectionsService } from '../collections.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/interfaces/app.state.interfaces';
import { selectIsUserAuthorized } from '../../store/selectors/collections.selector';
import { concatAll } from 'rxjs/operators';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})

export class ImageCardComponent implements OnInit {
    @Input() id: string;
    @Input() url: string;
    @Input() downloadUrl: string;
    @Input() authorName: string;
    @Input() rowHeight: number = 1;
    @Input() gutterSize: number = 1;
    @ViewChild('img') img: ElementRef;

    public rows: number = 0;

    private isAuthorized$;

    ngOnInit(): void {
    }

    addImage() {
        this.isAuthorized$ = this.store.pipe(select(selectIsUserAuthorized))
            .subscribe(isAuthorized => {
                if (!isAuthorized) {
                    window.open(this.collectionsService.buildAutentificationString(), "_self");
                }
                else {
                    this.dialog.open(AddToCollectionWindowComponent, { data: { photoId: this.id } });
                }
            })
    }

    ngOnDestroy(): void {
        this.isAuthorized$.unsubscribe();
    }

    @HostListener('window:resize')
    calculateRows() {
        this.rows = Math.floor(this.img.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize));
    }

    constructor(
        public dialog: MatDialog,
        private collectionsService: CollectionsService,
        private store: Store<AppState>
    ) { }
}