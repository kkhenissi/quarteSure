import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-course',
  templateUrl: './next-course.component.html',
  styleUrls: ['./next-course.component.css']
})
export class NextCourseComponent implements OnInit {
  @Input('refCourse') refCourse:string;
  constructor() { }

  ngOnInit(): void {
  }

  selectCourse() {}

}
