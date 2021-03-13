
import { Action } from "@ngrx/store";
import { Participant } from "../models/participants.model";
import { ParticipantActions, ParticipantActionsTypes } from "./participant.actions";

export enum ParticipantsStatusEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"

}


export interface ParticipantsState {
  participants: Participant[],
  errorMessage: any,
  dataStatus: ParticipantsStatusEnum

}
const initState: ParticipantsState= {
  participants: [],
  errorMessage: "",
  dataStatus: ParticipantsStatusEnum.INITIAL

}

export function participantReducer(state: ParticipantsState=initState, action: Action): ParticipantsState {
  switch(action.type) {
    case ParticipantActionsTypes.GET_ALL_PARTICIPANTS:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADING}
    case ParticipantActionsTypes.GET_ALL_PARTICIPANTS_SUCCESS:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADED, participants: (<ParticipantActions>action).payload}
    case ParticipantActionsTypes.GET_ALL_PARTICIPANTS_ERROR:
   //   console.log('yoooooooooooouuuuuuuuuuuuuuuppppppppppyyyyyyyyyyyy !!',(<ParticipantActions>action).payload)
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: (<ParticipantActions>action).payload}

    case ParticipantActionsTypes.GET_SELECTED_PARTICIPANT:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADING}
    case ParticipantActionsTypes.GET_SELECTED_PARTICIPANT_SUCCESS:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADED, participants: (<ParticipantActions>action).payload}
    case ParticipantActionsTypes.GET_SELECTED_PARTICIPANT_ERROR:
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: (<ParticipantActions>action).payload}

    default: return {...state}
  }

}
