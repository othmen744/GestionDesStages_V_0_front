import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheProfComponent } from './affiche-prof.component';

describe('AfficheProfComponent', () => {
  let component: AfficheProfComponent;
  let fixture: ComponentFixture<AfficheProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
