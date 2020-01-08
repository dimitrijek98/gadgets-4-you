import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AddProduct } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {

  @Input()
  products: Product[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

 addProductToCart(product: Product) {
   this.store.dispatch(new AddProduct(product));
 }

}

