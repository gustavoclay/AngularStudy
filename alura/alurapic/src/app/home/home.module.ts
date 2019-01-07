import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {VmessageModule} from '../shared/components/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {SignupService} from './signup/signup.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VmessageModule,
        RouterModule,
        HomeRoutingModule,
        FormsModule //não precisa, retirar depois, usar reactive form module
    ],
    exports: [],
    declarations: [
        SignInComponent,
        SignupComponent,
        HomeComponent
    ],
    providers: [SignupService],
})
export class HomeModule {
}
