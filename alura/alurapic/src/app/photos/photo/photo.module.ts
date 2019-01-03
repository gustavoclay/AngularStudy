import {NgModule} from '@angular/core';

import {PhotoComponent} from './photo.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [PhotoComponent],
    declarations: [PhotoComponent],
    providers: [],
})
export class PhotoModule {
}
