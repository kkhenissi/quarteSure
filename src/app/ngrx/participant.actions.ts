import { Action } from "@ngrx/store";
import { Participant } from "../models/participants.model";

export enum ParticipantActionsTypes {
  GET_ALL_PARTICIPANTS= "[Participants] Get All participant",
  GET_ALL_PARTICIPANTS_SUCCESS= "[Participants] Get All participant Success",
  GET_ALL_PARTICIPANTS_ERROR= "[Participants] Get All participant Error",

  GET_SELECTED_PARTICIPANT= "[Participants] Get Selected participant",
  GET_SELECTED_PARTICIPANT_SUCCESS= "[Participants] Get Selected participant Success",
  GET_SELECTED_PARTICIPANT_ERROR= "[Participants] Get Selected participant Error",

}

export class GetAllParticipantActions implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_ALL_PARTICIPANTS;
  constructor(public payload:any) {}
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
  constructor(public payload:Participant[]) {}
}
export class GetSelectedParticipantActionsError implements Action{
  type: ParticipantActionsTypes=ParticipantActionsTypes.GET_SELECTED_PARTICIPANT_ERROR;
  constructor(public payload:string) {}
}

export type ParticipantActions = GetAllParticipantActions | GetAllParticipantActionsSuccess | GetAllParticipantActionsError |
                             GetSelectedParticipantActions | GetSelectedParticipantActionsSuccess | GetSelectedParticipantActionsError



