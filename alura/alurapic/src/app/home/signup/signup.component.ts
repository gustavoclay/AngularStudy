import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';

@Component({
    templateUrl: 'signup.template.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userNotTakenValidatorService: UserNotTakenValidatorService) {

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
        })
        ;
    }


}
