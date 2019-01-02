import { Component } from '@angular/core';
import { PhotosService } from './photos/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'alurapic';

  photos: Object[] = [];

  constructor(photoService: PhotosService) {

    photoService.listFromUser('flavio').subscribe(photos => {
      console.log(photos[0].userId);
      this.photos = photos;
    });

  }


}
