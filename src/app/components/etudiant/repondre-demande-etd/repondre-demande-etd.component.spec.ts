import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreDemandeEtdComponent } from './repondre-demande-etd.component';

describe('RepondreDemandeEtdComponent', () => {
  let component: RepondreDemandeEtdComponent;
  let fixture: ComponentFixture<RepondreDemandeEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepondreDemandeEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepondreDemandeEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
