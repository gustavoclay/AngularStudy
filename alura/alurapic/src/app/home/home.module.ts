import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {VmessageModule} from '../shared/components/vmessage/vmessage.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VmessageModule
    ],
    exports: [],
    declarations: [SignInComponent],
    providers: [],
})
export class HomeModule {
}
