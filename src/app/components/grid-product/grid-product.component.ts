import {Component, OnInit, Input} from '@angular/core';
import {Product} from 'src/app/models/Product';
import {select, Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {AddProduct} from 'src/app/store/actions/cart.actions';
import {photoUrl} from 'src/app/Config';
import { notSetUpPhone} from '../../store/selectors/auth.selector';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-grid-product',
    templateUrl: './grid-product.component.html',
    styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {

    photoUrl = photoUrl;
    notSetUpPhone$: Observable<boolean>;
    @Input()
    products: Product[];

    constructor(private router: Router, private store: Store<AppState>) {
    }

    ngOnInit() {
        this.notSetUpPhone$ = this.store.pipe(
            select(notSetUpPhone)
        );
    }

    addProductToCart(product: Product) {
        this.store.dispatch(new AddProduct(product));
    }

}

