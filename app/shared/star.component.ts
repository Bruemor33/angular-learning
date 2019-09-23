import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // passing data to a nested component using the @Input() decorator
    // now you can use data binding on the selector of this nested component
    @Input() rating: number;
    starWidth: number;
    // using the output decorator, we can now send data to the parent component
    // using the generic emitter, we are able to set the type of the even to a string
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}