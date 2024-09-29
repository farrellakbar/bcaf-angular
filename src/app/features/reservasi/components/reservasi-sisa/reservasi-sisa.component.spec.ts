import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasiSisaComponent } from './reservasi-sisa.component';

describe('ReservasiSisaComponent', () => {
  let component: ReservasiSisaComponent;
  let fixture: ComponentFixture<ReservasiSisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasiSisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasiSisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
