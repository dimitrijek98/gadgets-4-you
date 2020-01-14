import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {RequestAllProducts} from 'src/app/store/actions/product.actions';
import {selectAllProducts} from 'src/app/store/selectors/product.selector';
import {Observable} from 'rxjs';
import {Product} from 'src/app/models/Product';
import {phone, notSetUpPhone} from '../../store/selectors/auth.selector';
import {Phone} from '../../models/Phone';

@Component({
    selector: 'app-all-products',
    templateUrl: './all-products.component.html',
    styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

    public products$: Observable<Product[]>;

    phone$: Observable<Phone>;
    notSetUpPhone$: Observable<boolean>;
    phoneType: Phone;

    constructor(private store: Store<AppState>) {
    }


    ngOnInit() {
        this.notSetUpPhone$ = this.store.pipe(
            select(notSetUpPhone)
        );
        this.phone$ = this.store.pipe(
            select(phone)
        );
        this.phone$.subscribe(val => {
          this.phoneType = val;
        });
        this.store.dispatch(new RequestAllProducts(this.phoneType));
        this.products$ = this.store.pipe(
            select(selectAllProducts)
        );
    }

}
