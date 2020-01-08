import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from 'src/app/store/selectors/auth.selector';
import { Register } from 'src/app/store/actions/auth.actions';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  firstNameFormGroup: FormGroup;
  lastNameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private _formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.firstNameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required]
    });
    this.lastNameFormGroup = this._formBuilder.group({
      lastNameCtrl: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.compose([Validators.required, Validators.email])]
    });
    this.passwordFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }
  userRegister() {
    const firstName = this.firstNameFormGroup.value.firstNameCtrl;
    const lastName = this.lastNameFormGroup.value.lastNameCtrl;
    const password = this.passwordFormGroup.value.passwordCtrl;
    const email = this.emailFormGroup.value.emailCtrl;
    const user: User = {
      firstName,
      lastName,
      email,
      password
    };
    this.store.dispatch(new Register(user));
  }

}
