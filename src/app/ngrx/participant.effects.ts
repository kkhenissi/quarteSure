import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ParticipantService } from "../services/participant.service";
import { GetAllParticipantActionsError, GetAllParticipantActionsSuccess, GetSelectedParticipantActionsError, GetSelectedParticipantActionsSuccess, ParticipantActionsTypes } from "./participant.actions";



@Injectable()
export class ParticipantsEffects {

  constructor(private participantService: ParticipantService,
              private effectActions: Actions) { }

  getAllParticipantsEffect:Observable<Action>=createEffect( () => {
        return  this.effectActions.pipe(
        ofType(ParticipantActionsTypes.GET_ALL_PARTICIPANTS),
        mergeMap((action: Action) => {
           return this.participantService.getParticipants()
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

  // delSelectedParticipantsEffect:Observable<Action>=createEffect( () => {
  //   return  this.effectActions.pipe(
  //   ofType(ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT),
  //   mergeMap((action: ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT) => {
  //      return this.participantService.getSelectedParticipants()
  //      .pipe(
  //        map(participants => {
  //          return new GetAllParticipantActionsSuccess(<Participant[]>participants);
  //        }),
  //        catchError(err=> of(
  //          new GetSelectedParticipantActionsError(err.message)
  //        ))
  //       )
  //   })
  //  )}
  // )

}
