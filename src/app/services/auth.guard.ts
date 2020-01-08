import { Injectable, NgModule } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { State, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { isLoggedIn } from '../store/selectors/auth.selector';
import { tap } from 'rxjs/operators';

@NgModule()
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private store: State<AppState>, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('Login');
                }
            })
        );
    }
}
