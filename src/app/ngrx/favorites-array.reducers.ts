
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Participant } from "../models/participant.model";
import * as favoriteActions from "./favorites-array.actions";


export enum ParticipantsStatusEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"

}


export interface FavoritesState {

  favorites: Participant[],
  errorMessage: any,
  dataStatus: ParticipantsStatusEnum

}
const initState: FavoritesState= {

  favorites: [],
  errorMessage: "",
  dataStatus: ParticipantsStatusEnum.INITIAL

}

export function favoriteReducer(state: FavoritesState=initState, action: favoriteActions.FavoriteActions): FavoritesState {
  switch(action.type) {
    case favoriteActions.FavoritesActionsTypes.GET_ALL_FAVORITES:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADING}
    case favoriteActions.FavoritesActionsTypes.GET_ALL_FAVORITES_SUCCESS:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADED, favorites: action.payload}
    case favoriteActions.FavoritesActionsTypes.GET_ALL_FAVORITES_ERROR:
   //   console.log('yoooooooooooouuuuuuuuuuuuuuuppppppppppyyyyyyyyyyyy !!',(<ParticipantActions>action).payload)
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: action.payload}

    case favoriteActions.FavoritesActionsTypes.GET_SELECTED_FAVORITE:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADING}
    case favoriteActions.FavoritesActionsTypes.GET_SELECTED_FAVORITE_SUCCESS:
      return {...state, dataStatus: ParticipantsStatusEnum.LOADED, favorites: action.payload}
    case favoriteActions.FavoritesActionsTypes.GET_SELECTED_FAVORITE_ERROR:
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: action.payload}


      case favoriteActions.FavoritesActionsTypes.CREATE_FAVORITE_SUCCESS: {
       // return customerAddapter.addOne(action.payload, state)
        return {...state, dataStatus: ParticipantsStatusEnum.LOADED, favorites: action.payload}
     }

     case favoriteActions.FavoritesActionsTypes.CREATE_FAVORITE_ERROR: {
       return {
         ...state,
         errorMessage: action.payload
       }
     }




    case favoriteActions.FavoritesActionsTypes.DELL_SELECTED_FAVORITE:
      return {
        ...state, dataStatus: ParticipantsStatusEnum.LOADED,
        favorites: action.payload.filter()
      }
    // case ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT_SUCCESS:
    //   return {
    //          ...state, dataStatus: ParticipantsStatusEnum.LOADED,
    //          participants: action.payload.filter(part => part.numOrder !==4)
    //         }
    case favoriteActions.FavoritesActionsTypes.DELL_SELECTED_FAVORITE_ERROR:
      return {...state, dataStatus: ParticipantsStatusEnum.ERROR, errorMessage: action.payload}

    default: return {...state}
  }

}
let favoritesFS = createFeatureSelector<Participant>('favoritesState')
export let favoritesSelector = createSelector(favoritesFS, state => state)


