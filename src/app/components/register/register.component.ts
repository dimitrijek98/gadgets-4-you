import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Register } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { registerFail } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  products: Product[];
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  registerFail$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.registerFail$ = this.store.pipe(
      select(registerFail)
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

  errorFirstName() {
    return this.firstName.hasError('required') ? 'This field is required' : '';
  }

  errorLastName() {
    return this.lastName.hasError('required') ? 'This field is required' : '';
  }

  userRegister() {
    console.log(this.email.value, this.password.value, this.firstName.value, this.lastName.value);
    const user: User = {
      email: this.email.value,
      password: this.password.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value
    };
    this.store.dispatch(new Register(user));
  }
}

