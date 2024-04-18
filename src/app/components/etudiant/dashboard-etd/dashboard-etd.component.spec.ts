import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEtdComponent } from './dashboard-etd.component';

describe('DashboardEtdComponent', () => {
  let component: DashboardEtdComponent;
  let fixture: ComponentFixture<DashboardEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
