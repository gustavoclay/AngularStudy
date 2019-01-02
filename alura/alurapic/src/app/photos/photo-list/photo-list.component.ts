import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

  constructor(private photoService: PhotosService) {
  }

  ngOnInit(): void {
    this.photoService.listFromUser('flavio').subscribe(photos => this.photos = photos);
  }

}
