import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
    selectAuthState,
    (auth) => auth.loggedIn
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);

export const isLoginFail = createSelector(
    selectAuthState,
    user => user.loginFail
);

export const userName = createSelector(
    selectAuthState,
    user => user.user ? user.user.firstName : null
);

export const registerFail = createSelector(
    selectAuthState,
    user => user.registerFail
);
