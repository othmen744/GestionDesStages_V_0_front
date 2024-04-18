import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProfComponent } from './afficher-prof.component';

describe('AfficherProfComponent', () => {
  let component: AfficherProfComponent;
  let fixture: ComponentFixture<AfficherProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
