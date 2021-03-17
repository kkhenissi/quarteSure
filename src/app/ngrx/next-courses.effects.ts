import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { NextCourse } from "../models/next-course.model";
import { NextCoursesService } from "../services/next-courses.service";
import { GetAllNextCourseActionsError, GetAllNextCourseActionsSuccess, NextCourseActionsTypes } from "./next-course.actions";



@Injectable()
export class NextCoursesEffects {

  constructor(private nextCoursesService: NextCoursesService,
              private effectActions: Actions) { }

  getNextCoursesEffect:Observable<Action>=createEffect( () => {
        return  this.effectActions.pipe(
        ofType(NextCourseActionsTypes.GET_ALL_NEXTCOURSES),
        mergeMap((action: Action) => {
           return this.nextCoursesService.getNextCourses()
           .pipe(
             map((nextCourses) =>  new GetAllNextCourseActionsSuccess(<NextCourse[]>nextCourses)),
             catchError((err)=> of(
               new GetAllNextCourseActionsError(err.message)))
           )
        })
      )
    });

  // getSelectedNextCourseEffect:Observable<Action>=createEffect( () => {
  //   return  this.effectActions.pipe(
  //   ofType(NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE),
  //   mergeMap((action: Action) => {
  //      return this.participantService.getSelectedParticipants()
  //      .pipe(
  //        map(nextCourses => {
  //          return new GetSelectedNextCourseActionsSuccess(<NextCourse[]>nextCourses);
  //        }),
  //        catchError(err=> of(
  //          new GetSelectedNextCourseActionsError(err.message)
  //        ))
  //       )
  //   })
  //  )}
  // )

  // delSelectedParticipantsEffect:Observable<Action>=createEffect( () => {
  //   return  this.effectActions.pipe(
  //   ofType(ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT),
  //   mergeMap((action: ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT) => {
  //      return this.participantService.getSelectedParticipants()
  //      .pipe(
  //        map(nextCourses => {
  //          return new GetAllParticipantActionsSuccess(<Participant[]>nextCourses);
  //        }),
  //        catchError(err=> of(
  //          new GetSelectedParticipantActionsError(err.message)
  //        ))
  //       )
  //   })
  //  )}
  // )

}
