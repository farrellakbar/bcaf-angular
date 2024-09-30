import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageValidationComponent } from './message-validation.component';

describe('MessageValidationComponent', () => {
  let component: MessageValidationComponent;
  let fixture: ComponentFixture<MessageValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
