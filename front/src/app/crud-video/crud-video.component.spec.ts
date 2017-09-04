import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVideoComponent } from './crud-video.component';

describe('CrudVideoComponent', () => {
  let component: CrudVideoComponent;
  let fixture: ComponentFixture<CrudVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
