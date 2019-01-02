import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {PhotosService} from '../photos.service';
import {Observable} from 'rxjs';
import {Photo} from '../photo';

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private service: PhotosService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.service.listFromUser(userName);
    }

}
