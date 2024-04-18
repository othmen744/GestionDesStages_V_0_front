import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerDemandeComponent } from './signer-demande.component';

describe('SignerDemandeComponent', () => {
  let component: SignerDemandeComponent;
  let fixture: ComponentFixture<SignerDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignerDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
