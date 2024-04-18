import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerDemandeProfComponent } from './signer-demande.component';

describe('SignerDemandeComponent', () => {
  let component: SignerDemandeProfComponent;
  let fixture: ComponentFixture<SignerDemandeProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerDemandeProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignerDemandeProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
