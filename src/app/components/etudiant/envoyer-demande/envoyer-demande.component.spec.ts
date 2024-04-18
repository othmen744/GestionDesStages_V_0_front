import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerDemandeComponent } from './envoyer-demande.component';

describe('EnvoyerDemandeComponent', () => {
  let component: EnvoyerDemandeComponent;
  let fixture: ComponentFixture<EnvoyerDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoyerDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
