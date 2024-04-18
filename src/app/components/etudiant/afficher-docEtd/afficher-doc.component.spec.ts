import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDocComponent } from './afficher-doc.component';

describe('AfficherDocComponent', () => {
  let component: AfficherDocComponent;
  let fixture: ComponentFixture<AfficherDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
