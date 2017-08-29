import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervideoComponent } from './registervideo.component';

describe('RegistervideoComponent', () => {
  let component: RegistervideoComponent;
  let fixture: ComponentFixture<RegistervideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistervideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistervideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
