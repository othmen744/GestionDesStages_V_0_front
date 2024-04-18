import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtdComponent } from './ajouter-etd.component';

describe('AjouterEtdComponent', () => {
  let component: AjouterEtdComponent;
  let fixture: ComponentFixture<AjouterEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
