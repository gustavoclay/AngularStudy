import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';
import {NewUser} from './new-user';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';
import {PlataformDetectionService} from '../../core/plataform-detection/plataform-detection.service';

@Component({
    templateUrl: 'signup.template.html',
    providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SignupService,
        private router: Router,
        private plataformDetectionService: PlataformDetectionService
    ) {

    }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
        this.plataformDetectionService.isPlataformBrowser() && this.inputEmail.nativeElement.focus();
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signup(newUser).subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
        );
    }


}
