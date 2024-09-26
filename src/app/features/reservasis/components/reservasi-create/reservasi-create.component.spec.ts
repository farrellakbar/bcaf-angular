import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasiCreateComponent } from './reservasi-create.component';

describe('ReservasiCreateComponent', () => {
  let component: ReservasiCreateComponent;
  let fixture: ComponentFixture<ReservasiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasiCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
