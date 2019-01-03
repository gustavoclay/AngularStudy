import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-load-button',
    templateUrl: './load-button.component.html',
    styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

    @Input() hasMore = true;

    constructor() {
    }

    ngOnInit() {
    }

}
