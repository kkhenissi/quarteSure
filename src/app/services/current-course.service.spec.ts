import { TestBed } from '@angular/core/testing';

import { CurrentCourseService } from './current-course.service';

describe('CurrentCourseService', () => {
  let service: CurrentCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
