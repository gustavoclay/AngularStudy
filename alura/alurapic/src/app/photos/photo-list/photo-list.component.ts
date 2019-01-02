import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

  constructor(
    private photoService: PhotosService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService.listFromUser(userName).subscribe(photos => this.photos = photos);
  }

}
