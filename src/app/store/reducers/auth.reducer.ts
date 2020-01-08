import { User } from '../../models/User';
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface AuthState {
    registerFail: boolean;
    loginFail: boolean;
    loggedIn: boolean;
    user: User;
}

const initialAuthState: AuthState = {
    registerFail: false,
    loginFail: false,
    loggedIn: false,
    user: undefined
};

export default function authReducer(state: AuthState = initialAuthState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LoginSuccessAction:
            {
                return {
                    registerFail: false,
                    loginFail: false,
                    loggedIn: true,
                    user: action.user
                };
            }
        case AuthActionTypes.RegisterSuccessAction: {
                return {
                    registerFail: false,
                    loginFail: false,
                    loggedIn: true,
                    user: action.user
                };
            }
        case AuthActionTypes.LoginFailAction: {
                return {
                    registerFail: false,
                    loginFail: true,
                    loggedIn: false,
                    user: undefined
                };
            }
        case AuthActionTypes.RegisterFailAction: {
                return {
                    registerFail: true,
                    loginFail: false,
                    loggedIn: false,
                    user: undefined
                };
            }
        case AuthActionTypes.LogoutAction: {
                return {
                    registerFail: false,
                    loginFail: false,
                    loggedIn: false,
                    user: undefined
                };
            }
        default:
            return state;
    }
}
