import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasiChoiceComponent } from './reservasi-choice.component';

describe('ReservasiChoiceComponent', () => {
  let component: ReservasiChoiceComponent;
  let fixture: ComponentFixture<ReservasiChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasiChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasiChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
