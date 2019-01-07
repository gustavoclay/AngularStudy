import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlataformDetectionService} from '../../core/plataform-detection/plataform-detection.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('inputUserName') inputUserName: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private plataformDetectionService: PlataformDetectionService
    ) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        PlataformDetectionService.isPlataformBrowser() && this.inputUserName.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password).subscribe(
            () => this.router.navigate(['user', userName]),
            (err) => {
                console.log(err);
                this.loginForm.reset();
                PlataformDetectionService.isPlataformBrowser() && this.inputUserName.nativeElement.focus();
                alert('Invalid user name or password');
            }
        );
    }


}
