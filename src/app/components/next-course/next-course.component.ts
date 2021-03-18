import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { participantsSelector } from 'src/app/ngrx/next-courses.reducers';


@Component({
  selector: 'app-next-course',
  templateUrl: './next-course.component.html',
  styleUrls: ['./next-course.component.css']
})
export class NextCourseComponent implements OnInit {
  @Input('refCourse') refCourse:string;
  @Input('indexCourse') indexCourse:number;
  @Output() checkParticipants = new EventEmitter<any[]>();
  selectedCourse: any[];
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  selectCourse(event) {
   // this.store.dispatch(new GetAllParticipantActions(ParticipantActionsTypes.GET_ALL_PARTICIPANTS))
   console.log('RRRRRR+6666RRRR==>',event);
   this.store.select(participantsSelector).subscribe(data => {
     // send selected course

      this.selectedCourse=data['courses'][this.indexCourse];
      console.log('RRRRRR++RRRR==>',data['courses'][this.indexCourse]);
    })

   // this.store.dispatch(new GetAllNextCourseActions(NextCourseActionsTypes.GET_ALL_NEXTCOURSES))
    this.checkParticipants.emit(this.selectedCourse);
  }


}
