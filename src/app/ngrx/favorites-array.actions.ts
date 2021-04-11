import { Action } from "@ngrx/store";
import { Participant } from "../models/participant.model";
import { SelectedCourse } from "../models/selected-course.model";

export enum FavoritesActionsTypes {


  GET_ALL_FAVORITES= "[Favorites] Get All favorites",
  GET_ALL_FAVORITES_SUCCESS= "[Favorites] Get All favorites Success",
  GET_ALL_FAVORITES_ERROR= "[Favorites] Get All favorites Error",

  GET_SELECTED_FAVORITE= "[Favorites] Get Selected favorites",
  GET_SELECTED_FAVORITE_SUCCESS= "[Favorites] Get Selected favorites Success",
  GET_SELECTED_FAVORITE_ERROR= "[Favorites] Get Selected favorites Error",

  DELL_SELECTED_FAVORITE = "[Favorites] Delete Selected favorites",
  DELL_SELECTED_FAVORITE_SUCCESS= "[Favorites] Delete Selected favorites Success",
  DELL_SELECTED_FAVORITE_ERROR= "[Favorites] Delete Selected favorites Error",

  CREATE_FAVORITE = "[Favorites] create favorites",
  CREATE_FAVORITE_SUCCESS= "[Favorites] Create favorites Success",
  CREATE_FAVORITE_ERROR= "[Favorites] Create favorites Error",

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



export class CreateFavoriteActions implements Action{
  readonly type: FavoritesActionsTypes=FavoritesActionsTypes.CREATE_FAVORITE;
  constructor(public payload:any) {}
}
export class CreateFavoriteActionsSuccess implements Action{
  readonly type: FavoritesActionsTypes=FavoritesActionsTypes.CREATE_FAVORITE_SUCCESS;
  constructor(public payload:any) {}
}
export class CreateFavoriteActionsError implements Action{
  readonly type: FavoritesActionsTypes=FavoritesActionsTypes.CREATE_FAVORITE_ERROR;
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

export type FavoriteActions = GetAllFavoriteActions | GetAllFavoriteActionsSuccess | GetAllFavoriteActionsError |
                             GetSelectedFavoriteActions | GetSelectedFavoriteActionsSuccess | GetSelectedFavoriteActionsError |
                             DellSelectedFavoriteActions | DellSelectedFavoriteActionsSuccess | DellSelectedFavoriteActionsError



