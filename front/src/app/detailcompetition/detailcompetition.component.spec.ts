import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcompetitionComponent } from './detailcompetition.component';

describe('DetailcompetitionComponent', () => {
  let component: DetailcompetitionComponent;
  let fixture: ComponentFixture<DetailcompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
