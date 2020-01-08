import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartGridComponent } from './cart-grid.component';

describe('CartGridComponent', () => {
  let component: CartGridComponent;
  let fixture: ComponentFixture<CartGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
