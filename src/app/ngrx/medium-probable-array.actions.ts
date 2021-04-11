import { Action } from "@ngrx/store";
import { Participant } from "../models/participant.model";
import { SelectedCourse } from "../models/selected-course.model";

export enum FavoritesActionsTypes {


  GET_ALL_FAVORITES= "[Participants] Get All participant",
  GET_ALL_FAVORITES_SUCCESS= "[Participants] Get All participant Success",
  GET_ALL_FAVORITES_ERROR= "[Participants] Get All participant Error",

  GET_SELECTED_FAVORITE= "[Participants] Get Selected participant",
  GET_SELECTED_FAVORITE_SUCCESS= "[Participants] Get Selected participant Success",
  GET_SELECTED_FAVORITE_ERROR= "[Participants] Get Selected participant Error",

  DELL_SELECTED_FAVORITE = "[Participants] Delete Selected participant",
  DELL_SELECTED_FAVORITE_SUCCESS= "[Participants] Delete Selected participant Success",
  DELL_SELECTED_FAVORITE_ERROR= "[Participants] Delete Selected participant Error",

}


export class GetAllFavoriteActions implements Action{
  type: FavoritesActionsTypes=FavoritesActionsTypes.GET_ALL_FAVORITES
  constructor(public payload:any) {
    console.log('paylod from constructore ==>', payload)
  }
}
export class GetAllFavoriteActionsSuccess implements Action{
  type: FavoritesActionsTypes=FavoritesActionsTypes.GET_ALL_FAVORITES_SUCCESS;
  constructor(public payload:Participant[]) {}
}
export class GetAllFavoriteActionsError implements Action{
  type: FavoritesActionsTypes=FavoritesActionsTypes.GET_ALL_FAVORITES_ERROR;
  constructor(public payload:string) {}
}



export class GetSelectedFavoriteActions implements Action{
  type: FavoritesActionsTypes=FavoritesActionsTypes.GET_SELECTED_FAVORITE;
  constructor(public payload:any) {}
}
export class GetSelectedFavoriteActionsSuccess implements Action{
  type: FavoritesActionsTypes=FavoritesActionsTypes.GET_SELECTED_FAVORITE_SUCCESS;
  constructor(public payload:SelectedCourse[]) {}
}
export class GetSelectedFavoriteActionsError implements Action{
  type: FavoritesActionsTypes=FavoritesActionsTypes.GET_SELECTED_FAVORITE_ERROR;
  constructor(public payload:string) {}
}



export class DellSelectedFavoriteActions implements Action{
  readonly type: FavoritesActionsTypes=FavoritesActionsTypes.DELL_SELECTED_FAVORITE;
  constructor(public payload:any) {}
}
export class DellSelectedFavoriteActionsSuccess implements Action{
  readonly type: FavoritesActionsTypes=FavoritesActionsTypes.DELL_SELECTED_FAVORITE_SUCCESS;
  constructor(public payload:any) {}
}
export class DellSelectedFavoriteActionsError implements Action{
  readonly type: FavoritesActionsTypes=FavoritesActionsTypes.DELL_SELECTED_FAVORITE_ERROR;
  constructor(public payload:string) {}
}

export type ParticipantActions = GetAllFavoriteActions | GetAllFavoriteActionsSuccess | GetAllFavoriteActionsError |
                             GetSelectedFavoriteActions | GetSelectedFavoriteActionsSuccess | GetSelectedFavoriteActionsError |
                             DellSelectedFavoriteActions | DellSelectedFavoriteActionsSuccess | DellSelectedFavoriteActionsError



