import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasiDetailComponent } from './reservasi-detail.component';

describe('ReservasiDetailComponent', () => {
  let component: ReservasiDetailComponent;
  let fixture: ComponentFixture<ReservasiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasiDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
