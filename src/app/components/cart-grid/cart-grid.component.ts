import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RemoveProduct, EmptyCart } from 'src/app/store/actions/cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css']
})
export class CartGridComponent implements OnInit {

  @Input()
  products: Product[];

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {  }

  removeProduct(product: Product) {
    this.store.dispatch(new RemoveProduct(product.id));
  }
  empty() {
    this.store.dispatch(new EmptyCart());
  }
  checkout() {
    this.router.navigateByUrl('Checkout');
  }

}
