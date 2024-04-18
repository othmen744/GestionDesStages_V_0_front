import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEtdsComponent } from './afficher-etds.component';

describe('AfficherEtdsComponent', () => {
  let component: AfficherEtdsComponent;
  let fixture: ComponentFixture<AfficherEtdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherEtdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherEtdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
