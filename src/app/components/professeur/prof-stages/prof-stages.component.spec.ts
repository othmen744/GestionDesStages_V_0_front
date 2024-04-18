import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfStagesComponent } from './prof-stages.component';

describe('ProfStagesComponent', () => {
  let component: ProfStagesComponent;
  let fixture: ComponentFixture<ProfStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
