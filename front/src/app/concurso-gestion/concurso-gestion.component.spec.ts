import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoGestionComponent } from './concurso-gestion.component';

describe('ConcursoGestionComponent', () => {
  let component: ConcursoGestionComponent;
  let fixture: ComponentFixture<ConcursoGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
