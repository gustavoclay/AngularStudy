import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [SignInComponent],
    providers: [],
})
export class HomeModule {
}
