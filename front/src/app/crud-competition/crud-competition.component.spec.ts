import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCompetitionComponent } from './crud-competition.component';

describe('CrudCompetitionComponent', () => {
  let component: CrudCompetitionComponent;
  let fixture: ComponentFixture<CrudCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
