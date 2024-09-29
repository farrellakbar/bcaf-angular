import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasiSearchComponent } from './reservasi-search.component';

describe('ReservasiSearchComponent', () => {
  let component: ReservasiSearchComponent;
  let fixture: ComponentFixture<ReservasiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasiSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
