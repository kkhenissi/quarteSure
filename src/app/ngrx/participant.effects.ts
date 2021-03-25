import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { RefCourse } from "../models/ref-course.model";
import { CurrentCourseService } from "../services/current-course.service";
import { ParticipantService } from "../services/participant.service";
import { GetAllParticipantActionsError, GetAllParticipantActionsSuccess, GetSelectedParticipantActionsError, GetSelectedParticipantActionsSuccess, ParticipantActionsTypes } from "./participant.actions";



@Injectable()
export class ParticipantsEffects {
  refCourse: RefCourse={R:'',C:''};
  urlParticipants:string;
  constructor(private participantService: ParticipantService,
              private effectActions: Actions,
              private currentCourseService: CurrentCourseService) {
                this.currentCourseService.getRefCourseObs().subscribe((resp)=> {
                this.refCourse=resp;
                 console.log('fffffffff++ffffffffff==>', this.refCourse)
                 let dateCourse= new Date();
                 this.urlParticipants="/"+dateCourse.toISOString().split('-')[2].substring(0,2)+dateCourse.toISOString().split('-')[1]+dateCourse.toISOString().split('-')[0]+"/"+this.refCourse.R+"/"+this.refCourse.C+"/participants?specialisation=INTERNET"
                 console.log('LLLLLLLLLLLLLLLLLLLLLLLlll==>', this.urlParticipants)
                })

               }

  getAllParticipantsEffect:Observable<Action>=createEffect( () => {

   // let dateCourse=new Date();
   // let refCourse: RefCourse;
   // this.currentCourseService.getRefCourseObs().subscribe(refCourse => refCourse = refCourse);
   // console.log('refCourse====+++++++++++++++++++===>',refCourse)
   // let  urlParticipants="/"+dateCourse.toISOString().split('-')[2].substring(0,2)+dateCourse.toISOString().split('-')[1]+dateCourse.toISOString().split('-')[0]+this.refCourse.R+"/"+this.refCourse.C+"/participants?specialisation=INTERNET"
        return  this.effectActions.pipe(
        ofType(ParticipantActionsTypes.GET_ALL_PARTICIPANTS),
        mergeMap((action: Action) => {

           return this.participantService.getParticipants(this.urlParticipants)
           .pipe(
             map((participants) =>  new GetAllParticipantActionsSuccess(participants)),
             catchError((err)=> of(
               new GetAllParticipantActionsError(err.message)))
           )
        })
      )
    });

  getSelectedParticipantsEffect:Observable<Action>=createEffect( () => {
    return  this.effectActions.pipe(
    ofType(ParticipantActionsTypes.GET_SELECTED_PARTICIPANT),
    mergeMap((action: Action) => {
       return this.participantService.getSelectedParticipants()
       .pipe(
         map(participants => {
           return new GetSelectedParticipantActionsSuccess(participants);
         }),
         catchError(err=> of(
           new GetSelectedParticipantActionsError(err.message)
         ))
        )
    })
   )}
  )

  // delSelectedParticipantEffect:Observable<Action>=createEffect( () => {
  //   return  this.effectActions.pipe(
  //   ofType(ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT),
  //   mergeMap((action: ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT) => {
  //      return this.participantService.getSelectedParticipants()
  //      .pipe(
  //        map(participants => {
  //          participants.filter(part => part.numOrdre!==4)
  //          return new GetAllParticipantActionsSuccess(<Participant[]><unknown>participants);
  //        }),
  //        catchError(err=> of(
  //          new GetSelectedParticipantActionsError(err.message)
  //        ))
  //       )
  //   })
  //  )}
  // )

}
