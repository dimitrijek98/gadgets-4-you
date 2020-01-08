import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { selectAllCartProducts } from 'src/app/store/selectors/cart.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products$ : Observable<Product[]>
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.products$ = this.store.pipe(
      select(selectAllCartProducts)
    )
  }

  checkout(){
    this.router.navigateByUrl("Checkout")
  }
}
