import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtdComponent } from './modifier-etd.component';

describe('ModifierEtdComponent', () => {
  let component: ModifierEtdComponent;
  let fixture: ComponentFixture<ModifierEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
