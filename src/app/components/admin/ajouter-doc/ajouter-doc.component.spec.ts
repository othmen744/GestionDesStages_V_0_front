import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocComponent } from './ajouter-doc.component';

describe('AjouterDocComponent', () => {
  let component: AjouterDocComponent;
  let fixture: ComponentFixture<AjouterDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
