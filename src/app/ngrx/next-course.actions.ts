import { Action } from "@ngrx/store";
import { NextCourse } from "../models/next-course.model";


export enum NextCourseActionsTypes {
  GET_ALL_NEXTCOURSES= "[NextCourses] Get All participant",
  GET_ALL_NEXTCOURSES_SUCCESS= "[NextCourses] Get All participant Success",
  GET_ALL_NEXTCOURSES_ERROR= "[NextCourses] Get All participant Error",

  GET_SELECTED_NEXTCOURSE= "[NextCourses] Get Selected participant",
  GET_SELECTED_NEXTCOURSE_SUCCESS= "[NextCourses] Get Selected participant Success",
  GET_SELECTED_NEXTCOURSE_ERROR= "[NextCourses] Get Selected participant Error",


}

export class GetAllNextCourseActions implements Action{
  type: NextCourseActionsTypes=NextCourseActionsTypes.GET_ALL_NEXTCOURSES;
  constructor(public payload:any) {}
}
export class GetAllNextCourseActionsSuccess implements Action{
  type: NextCourseActionsTypes=NextCourseActionsTypes.GET_ALL_NEXTCOURSES_SUCCESS;
  constructor(public payload:NextCourse[]) {}
}
export class GetAllNextCourseActionsError implements Action{
  type: NextCourseActionsTypes=NextCourseActionsTypes.GET_ALL_NEXTCOURSES_ERROR;
  constructor(public payload:string) {}
}



export class GetSelectedNextCourseActions implements Action{
  type: NextCourseActionsTypes=NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE;
  constructor(public payload:any) {}
}
export class GetSelectedNextCourseActionsSuccess implements Action{
  type: NextCourseActionsTypes=NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE_SUCCESS;
  constructor(public payload:NextCourse[]) {}
}
export class GetSelectedNextCourseActionsError implements Action{
  type: NextCourseActionsTypes=NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE_ERROR;
  constructor(public payload:string) {}
}



export type NextCourseActions = GetAllNextCourseActions | GetAllNextCourseActionsSuccess | GetAllNextCourseActionsError |
                                GetSelectedNextCourseActions | GetSelectedNextCourseActionsSuccess | GetSelectedNextCourseActionsError




