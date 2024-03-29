import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
    Login,
    AuthActionTypes,
    Logout,
    LoginSuccess,
    LoginFail,
    Register,
    RegisterFail,
    RegisterSuccess,
    Update,
    UpdateFail,
    UpdateSuccess
} from '../actions/auth.actions';
import {tap, map, mergeMap, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';
import {UserService} from 'src/app/services/user.service';
import {Phone} from "../../models/Phone";

@Injectable()
export class AuthEffects {

    @Effect()
    init$ = defer(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            return of(new LoginSuccess(JSON.parse(userData)));
        } else {
            return of(new Logout());
        }
    });

    @Effect()
    login$ = this.actions$.pipe(
        ofType<Login>(AuthActionTypes.LoginAction),
        mergeMap(action =>
            this.userService.loginUser(action.email, action.password)
        ),
        map(user => {
            if (user) {
                return new LoginSuccess(user);
            } else {
                return new LoginFail();
            }
        })
    );

    @Effect({dispatch: false})
    loginSuccess$ = this.actions$.pipe(
        ofType<LoginSuccess>(AuthActionTypes.LoginSuccessAction),
        tap((action) => {
            localStorage.setItem('user', JSON.stringify(action.user));
            this.router.navigateByUrl('').then(r => {});
        })
    );

    @Effect()
    register$ = this.actions$.pipe(
        ofType<Register>(AuthActionTypes.RegisterAction),
        switchMap(action =>
            this.userService.registerUser(action.user)
        ),
        map(user => {
            if (user) {
                return new RegisterSuccess(user);
            } else {
                return new RegisterFail();
            }
        })
    );

    @Effect()
    update$ = this.actions$.pipe(
        ofType<Update>(AuthActionTypes.UpdateAction),
        switchMap(action =>
            this.userService.updateUser(action.user)
        ),
        map(user => {
            if (user) {
                const phone = new Phone();
                phone.brand = user.phoneBrand;
                phone.model = user.phoneModel;
                const formattedUser = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone
                };
                return new UpdateSuccess(formattedUser);
            } else {
                return new UpdateFail();
            }
        })
    );

    @Effect({dispatch: false})
    updateSuccess$ = this.actions$.pipe(
        ofType<UpdateSuccess>(AuthActionTypes.UpdateSuccessAction),
        tap((action) => {
            localStorage.setItem('user', JSON.stringify(action.user));
            this.router.navigateByUrl('Store').then(r => {});
        })
    );

    @Effect({dispatch: false})
    registerSuccess$ = this.actions$.pipe(
        ofType<RegisterSuccess>(AuthActionTypes.RegisterSuccessAction),
        tap((action) => {
            localStorage.setItem('user', JSON.stringify(action.user));
            this.router.navigateByUrl('Profile').then(r => {});
        })
    );

    @Effect({dispatch: false})
    logout$ = this.actions$.pipe(
        ofType<Logout>(AuthActionTypes.LogoutAction),
        tap(() => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('').then(r => {});
        })
    );

    constructor(private actions$: Actions, private router: Router, private userService: UserService) {
    }

}
