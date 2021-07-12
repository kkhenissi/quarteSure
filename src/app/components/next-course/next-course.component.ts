import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { RefCourse } from 'src/app/models/ref-course.model';
import { GetAllParticipantActions, ParticipantActionsTypes } from 'src/app/ngrx/participant.actions';
import { CurrentCourseService } from 'src/app/services/current-course.service';


@Component({
  selector: 'app-next-course',
  templateUrl: './next-course.component.html',
  styleUrls: ['./next-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextCourseComponent implements OnInit {
  @Input('refNextCourse') refNextCourse:string;
 // @Input('indexCourse') indexCourse:number;
  @Output() initFavLessMeduimArray = new EventEmitter<any>();
 // selectedCourse: any[];
  constructor(private store: Store,
              private currentCourseService: CurrentCourseService) { }

  ngOnInit(): void {
  }

  selectCourse(event) {


    let refCourse: RefCourse={R:'',C:''};
    refCourse.R=event.substring(0,2);
    refCourse.C=event.substring(2);
    console.log("NNNNNNNNNNNNNNNNNNN==>",refCourse)
   this.currentCourseService.setRefCourseObs(refCourse);
   setTimeout(()=>{
    this.store.dispatch(new GetAllParticipantActions(ParticipantActionsTypes.GET_ALL_PARTICIPANTS))
   })

  // this.initFavLessMeduimArray.emit();
  }


}

