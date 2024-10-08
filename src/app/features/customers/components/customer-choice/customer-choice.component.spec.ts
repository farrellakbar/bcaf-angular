import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChoiceComponent } from './customer-choice.component';

describe('CustomerChoiceComponent', () => {
  let component: CustomerChoiceComponent;
  let fixture: ComponentFixture<CustomerChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
