import {Injectable} from '@angular/core';
import {SignupService} from './signup.service';
import {AbstractControl} from '@angular/forms';
import {debounceTime, first, map, switchMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserNotTakenValidatorService {

    constructor(private singupService: SignupService) {

    }

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control.valueChanges.pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.singupService.checkUserNameTake(userName)
                ))
                .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
                .pipe(first());
        };
    }
}
