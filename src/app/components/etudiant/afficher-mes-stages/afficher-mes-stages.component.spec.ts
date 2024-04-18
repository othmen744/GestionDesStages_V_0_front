import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMesStagesComponent } from './afficher-mes-stages.component';

describe('AfficherMesStagesComponent', () => {
  let component: AfficherMesStagesComponent;
  let fixture: ComponentFixture<AfficherMesStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMesStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherMesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
