import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {VmessageModule} from '../shared/components/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VmessageModule,
        RouterModule
    ],
    exports: [],
    declarations: [SignInComponent],
    providers: [],
})
export class HomeModule {
}
