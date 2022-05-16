import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona } from './persona.component';

describe('PersonaComponent', () => {
  let component: Persona;
  let fixture: ComponentFixture<Persona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Persona ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Persona);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
