
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Participant } from "../models/participant.model";
import * as participantActions from "./participant.actions";
import { ParticipantActions, ParticipantActionsTypes } from "./participant.actions";

export enum ParticipantsStatusEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"

}


export interface ParticipantsState {
  refCourse: string[];
  participants: Participant[],
  errorMessage: any,
  dataStatus: ParticipantsStatusEnum

}
const initState: ParticipantsState= {
  refCourse: [],
  participants: [],
  errorMessage: "",
  dataStatus: ParticipantsStatusEnum.INITIAL

}

export function participantReducer(state: ParticipantsState=initState, action: participantActions.ParticipantActions): ParticipantsState {
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
      return {...state, dataStatus: ParticipantsStatusEnum.LOADED, participants: action.payload}
    case ParticipantActionsTypes.GET_SELECTED_PARTICIPANT_ERROR:
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: action.payload}


    case ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT:
      return {
        ...state, dataStatus: ParticipantsStatusEnum.LOADED,
        participants: action.payload.filter()
      }
    // case ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT_SUCCESS:
    //   return {
    //          ...state, dataStatus: ParticipantsStatusEnum.LOADED,
    //          participants: action.payload.filter(part => part.numOrder !==4)
    //         }
    case ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT_ERROR:
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: action.payload}

    default: return {...state}
  }

}
let participantsFS = createFeatureSelector<Participant>('participantsState')
export let participantsSelector = createSelector(participantsFS, state => state)


