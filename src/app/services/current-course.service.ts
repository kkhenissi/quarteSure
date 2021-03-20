import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RefCourse } from '../models/ref-course.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentCourseService {
 refRcource: string;
 refCcource:string;

  constructor() { }

  private refCourseObs$: BehaviorSubject<RefCourse> = new BehaviorSubject({R:'', C:''});

  getRefCourseObs(): Observable<RefCourse> {
      return this.refCourseObs$.asObservable();
  }

  setRefCourseObs(refCourse: RefCourse) {
      this.refCourseObs$.next(refCourse);
  }

}
