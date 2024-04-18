import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDemandesComponent } from './prof-demandes.component';

describe('ProfDemandesComponent', () => {
  let component: ProfDemandesComponent;
  let fixture: ComponentFixture<ProfDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfDemandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
