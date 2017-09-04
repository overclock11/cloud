import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDetailVideoComponent } from './crud-detail-video.component';

describe('CrudDetailVideoComponent', () => {
  let component: CrudDetailVideoComponent;
  let fixture: ComponentFixture<CrudDetailVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDetailVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDetailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
