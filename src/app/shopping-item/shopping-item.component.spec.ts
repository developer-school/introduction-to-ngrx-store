import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemComponent } from './shopping-item.component';

describe('ShoppingItemComponent', () => {
  let component: ShoppingItemComponent;
  let fixture: ComponentFixture<ShoppingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
