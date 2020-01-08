import { Action } from '@ngrx/store';
import { User } from '../../models/User';

export enum AuthActionTypes {
  LoginAction = '[Login Page] Login Action',
  LogoutAction = '[Logout Button] Logout Action',
  LoginSuccessAction = '[Login User API] LoginSuccess Action',
  LoginFailAction = '[Login User API] LoginFail Action',
  RegisterAction = '[Register Form] Register Action',
  RegisterSuccessAction = '[Register User API] RegisterSuccess Action',
  RegisterFailAction = '[Register User API] RegisterFail Action'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public email: string, public password: string) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccessAction;
  constructor(public user: User) { }
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFailAction;
}

export class Register implements Action {
  readonly type = AuthActionTypes.RegisterAction;
  constructor(public user: User) { }
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccessAction;
  constructor(public user: User) { }
}

export class RegisterFail implements Action {
  readonly type = AuthActionTypes.RegisterFailAction;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout | LoginSuccess | LoginFail | Register | RegisterSuccess | RegisterFail;
