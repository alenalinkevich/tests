import { Input, Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})

export class ImageCardComponent {
    @Input() id: string;
    @Input() url: string;
    @Input() downloadUrl: string;
    @Input() authorName: string;
    @Input() rowHeight: number = 1;
    @Input() gutterSize: number = 1;
    @ViewChild('img') img: ElementRef;

    public rows: number = 0;

    addImage() {
        
        console.log(this.id);
    }

    @HostListener('window:resize')
    calculateRows() {
        this.rows = Math.floor(this.img.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize));
    }
}