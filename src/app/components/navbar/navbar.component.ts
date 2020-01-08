import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Logout } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut, userName } from 'src/app/store/selectors/auth.selector';
import { EmptyCart } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  userName$: Observable<string>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
    this.userName$ = this.store.pipe(
      select(userName)
    );
  }

  logout() {
    this.store.dispatch(new Logout());
    this.store.dispatch(new EmptyCart());
  }

}
