import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {userName, lastName, email, phone, id} from '../../store/selectors/auth.selector';
import {User} from '../../models/User';
import {Update} from '../../store/actions/auth.actions';
import {PhoneService} from '../../services/phone.service';
import {Phone} from '../../models/Phone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName$: Observable<string>;
  lastName$: Observable<string>;
  email$: Observable<string>;
  phone$: Observable<Phone>;
  id$: Observable<number>;
  phones$: Observable<Phone[]>;

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  id = undefined;

  constructor(private store: Store<AppState>, private phoneService: PhoneService) { }

  ngOnInit() {
    this.id$ = this.store.pipe(
        select(id)
    );
    this.id$.subscribe(val => {
      this.id = val;
    });
    this.userName$ = this.store.pipe(
        select(userName)
    );
    this.userName$.subscribe(val => {
      this.firstName.setValue(val);
    });
    this.lastName$ = this.store.pipe(
        select(lastName)
    );
    this.lastName$.subscribe(val =>{
      this.lastName.setValue(val);
    });
    this.email$ = this.store.pipe(
        select(email)
    );
    this.email$.subscribe(val => {
      this.email.setValue(val);
    });
    this.phone$ = this.store.pipe(
        select(phone)
    );
    this.phone$.subscribe(val => {
      this.phone.setValue(val);
    });
    this.phones$ = this.phoneService.getPhoneModels();
  }

  errorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  errorFirstName() {
    return this.firstName.hasError('required') ? 'This field is required' : '';
  }

  errorLastName() {
    return this.lastName.hasError('required') ? 'This field is required' : '';
  }

  errorPhone() {
    return this.phone.hasError('required') ? 'You have to set phone model in order to browse store.' : '';
  }
  userUpdate() {
    const user: User = {
      id: this.id,
      email: this.email.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phone: this.phone.value
    };
    console.log(user);
    this.store.dispatch(new Update(user));
  }
}
