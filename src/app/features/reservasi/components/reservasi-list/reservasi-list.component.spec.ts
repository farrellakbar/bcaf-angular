import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasiListComponent } from './reservasi-list.component';

describe('ReservasiListComponent', () => {
  let component: ReservasiListComponent;
  let fixture: ComponentFixture<ReservasiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
