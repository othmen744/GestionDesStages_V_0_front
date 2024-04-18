import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerDemandeEtdComponent } from './signer-demande-etd.component';

describe('SignerDemandeEtdComponent', () => {
  let component: SignerDemandeEtdComponent;
  let fixture: ComponentFixture<SignerDemandeEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerDemandeEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignerDemandeEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
