import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthGuard } from './services/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { ProductEffects } from './store/effects/product.effects';
import { GridProductComponent } from './components/grid-product/grid-product.component';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { CartComponent } from './components/cart/cart.component';
import { CartGridComponent } from './components/cart-grid/cart-grid.component';
import { CartEffects } from './store/effects/cart.effects';
import { CardEffects } from './store/effects/card.effects';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    AllProductsComponent,
    GridProductComponent,
    CartComponent,
    CartGridComponent,
    CheckoutComponent,
    PaymentSuccessComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AuthGuard,
    StoreModule.forRoot(rootReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects, ProductEffects, CartEffects, CardEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
