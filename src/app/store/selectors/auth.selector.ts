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

export const lastName = createSelector(
    selectAuthState,
    user => user.user ? user.user.lastName : null
);

export const email = createSelector(
    selectAuthState,
    user => user.user ? user.user.email : null
);

export const phone = createSelector(
    selectAuthState,
    user => user.user ? user.user.phone : null
);

export const id = createSelector(
    selectAuthState,
    user => user.user ? user.user.id : null
);

export const registerFail = createSelector(
    selectAuthState,
    user => user.registerFail
);
