import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Login } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { isLoginFail } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  loginFail$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loginFail$ = this.store.pipe(
      select(isLoginFail)
    );
  }

  errorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  errorPassword() {
    return this.password.hasError('required') ? 'This field is required' :
      this.password.hasError('minlength') ? 'Password must be at least 8 characters long' : '';
  }

  userLogin() {
    const email = this.email.value;
    const password = this.password.value;
    console.log(email, password);
    this.store.dispatch(new Login(email, password));
  }
}
