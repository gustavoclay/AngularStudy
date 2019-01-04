import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: String;

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    getUserName(){
        console.log(this.userName);
        return this.userName;
    }
}
