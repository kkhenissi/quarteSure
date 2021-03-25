import { Action } from "@ngrx/store";
import { Participant } from "../models/participant.model";
import { SelectedCourse } from "../models/selected-course.model";

export enum ParticipantActionsTypes {
  GET_REF_PARTICIPANTS= "[Participants] Get Ref participant",
  GET_REF_PARTICIPANTS_SUCCESS= "[Participants] Get Ref participant Success",
  GET_REF_PARTICIPANTS_ERROR= "[Participants] Get Ref participant Error",

  GET_ALL_PARTICIPANTS= "[Participants] Get All participant",
  GET_ALL_PARTICIPANTS_SUCCESS= "[Participants] Get All participant Success",
  GET_ALL_PARTICIPANTS_ERROR= "[Participants] Get All participant Error",

  GET_SELECTED_PARTICIPANT= "[Participants] Get Selected participant",
  GET_SELECTED_PARTICIPANT_SUCCESS= "[Participants] Get Selected participant Success",
  GET_SELECTED_PARTICIPANT_ERROR= "[Participants] Get Selected participant Error",

  DELL_SELECTED_PARTICIPANT = "[Participants] Delete Selected participant",
  DELL_SELECTED_PARTICIPANT_SUCCESS= "[Participants] Delete Selected participant Success",
  DELL_SELECTED_PARTICIPANT_ERROR= "[Participants] Delete Selected participant Error",

}

export class GetRefParticipantActions implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS
  constructor(public payload:any) {
    console.log('paylod from constructore ==>', payload)
  }
}
export class GetRefParticipantActionsSuccess implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS_SUCCESS;
  constructor(public payload:SelectedCourse[]) {}
}
export class GetRefParticipantActionsError implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS_ERROR;
  constructor(public payload:string) {}
}

export class GetAllParticipantActions implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS
  constructor(public payload:any) {
    console.log('paylod from constructore ==>', payload)
  }
}
export class GetAllParticipantActionsSuccess implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS_SUCCESS;
  constructor(public payload:Participant[]) {}
}
export class GetAllParticipantActionsError implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS_ERROR;
  constructor(public payload:string) {}
}



export class GetSelectedParticipantActions implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_SELECTED_PARTICIPANT;
  constructor(public payload:any) {}
}
export class GetSelectedParticipantActionsSuccess implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_SELECTED_PARTICIPANT_SUCCESS;
  constructor(public payload:SelectedCourse[]) {}
}
export class GetSelectedParticipantActionsError implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_SELECTED_PARTICIPANT_ERROR;
  constructor(public payload:string) {}
}



export class DellSelectedParticipantActions implements Action{
  readonly type: ParticipantActionsTypes=ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT;
  constructor(public payload:any) {}
}
export class DellSelectedParticipantActionsSuccess implements Action{
  readonly type: ParticipantActionsTypes=ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT_SUCCESS;
  constructor(public payload:any) {}
}
export class DellSelectedParticipantActionsError implements Action{
  readonly type: ParticipantActionsTypes=ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT_ERROR;
  constructor(public payload:string) {}
}

export type ParticipantActions = GetAllParticipantActions | GetAllParticipantActionsSuccess | GetAllParticipantActionsError |
                             GetSelectedParticipantActions | GetSelectedParticipantActionsSuccess | GetSelectedParticipantActionsError |
                             DellSelectedParticipantActions | DellSelectedParticipantActionsSuccess | DellSelectedParticipantActionsError



