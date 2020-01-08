import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProductComponent } from './grid-product.component';

describe('SingelProductComponent', () => {
  let component: GridProductComponent;
  let fixture: ComponentFixture<GridProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
