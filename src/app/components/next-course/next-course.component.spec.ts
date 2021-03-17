import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCourseComponent } from './next-course.component';

describe('NextCourseComponent', () => {
  let component: NextCourseComponent;
  let fixture: ComponentFixture<NextCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
