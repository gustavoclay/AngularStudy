import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({providedIn: 'root'})
export class PlataformDetectionService {

    constructor(@Inject(PLATFORM_ID) private plataform_id: String) {

    }

    isPlataformBrowser() {
        return isPlatformBrowser(PLATFORM_ID);
    }
}
