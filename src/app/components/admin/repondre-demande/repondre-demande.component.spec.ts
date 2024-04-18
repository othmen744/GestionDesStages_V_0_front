import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreDemandeComponent } from './repondre-demande.component';

describe('RepondreDemandeComponent', () => {
  let component: RepondreDemandeComponent;
  let fixture: ComponentFixture<RepondreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepondreDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepondreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
