import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProfComponent } from './ajouter-prof.component';

describe('AjouterProfComponent', () => {
  let component: AjouterProfComponent;
  let fixture: ComponentFixture<AjouterProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
