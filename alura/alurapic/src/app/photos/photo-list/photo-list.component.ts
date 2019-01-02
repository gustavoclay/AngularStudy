import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../photo';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter = '';

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.photos = this.activatedRoute.snapshot.data['photos'];
    }

}
