import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../photo/photo';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {PhotoService} from '../photo/photo.service';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

    photos: Photo[] = [];
    filter = '';
    debounce = new Subject<string>();
    hasMore = true;
    currentPage = 1;
    userName = '';

    constructor(private activatedRoute: ActivatedRoute, private service: PhotoService) {
    }

    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;
        this.photos = this.activatedRoute.snapshot.data['photos'];
        this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    load() {
        this.service
            .listFromUserPaginated(this.userName, ++this.currentPage)
            .subscribe(photos => {
                this.photos = this.photos.concat(photos);
                if (!photos.length) {
                    this.hasMore = false;
                }
            });
    }

}
