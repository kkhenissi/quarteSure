import { Action } from "@ngrx/store";
import { NextCourse } from "../models/next-course.model";


export enum CoursesActionsTypes {

  GET_ALL_COURSES= "[Courses] Get All courses",
  GET_ALL_COURSES_SUCCESS= "[Courses] Get All courses Success",
  GET_ALL_COURSES_ERROR= "[Courses] Get All courses Error",

  GET_SELECTED_COURSE= "[Courses] Get Selected course",
  GET_SELECTED_COURSE_SUCCESS= "[Courses] Get Selected course Success",
  GET_SELECTED_COURSE_ERROR= "[Courses] Get Selected course Error",

}

export class GetAllCourceActions implements Action{
  type: CoursesActionsTypes=CoursesActionsTypes.GET_ALL_COURSES;
  constructor(public payload:any) {}
}
export class GetAllCourseActionsSuccess implements Action{
  type: CoursesActionsTypes=CoursesActionsTypes.GET_ALL_COURSES_SUCCESS;
  constructor(public payload:NextCourse[]) {}
}
export class GetAllCourseActionsError implements Action{
  type: CoursesActionsTypes=CoursesActionsTypes.GET_ALL_COURSES_ERROR;
  constructor(public payload:string) {}
}



export class GetSelectedCourceActions implements Action{
  type: CoursesActionsTypes=CoursesActionsTypes.GET_SELECTED_COURSE;
  constructor(public payload:any) {}
}
export class GetSelectedCourseActionsSuccess implements Action{
  type: CoursesActionsTypes=CoursesActionsTypes.GET_SELECTED_COURSE_SUCCESS;
  constructor(public payload:NextCourse[]) {}
}
export class GetSelectedCourseActionsError implements Action{
  type: CoursesActionsTypes=CoursesActionsTypes.GET_SELECTED_COURSE_ERROR;
  constructor(public payload:string) {}
}

export type ProductActions = GetAllCourceActions | GetAllCourseActionsSuccess | GetAllCourseActionsError |
                             GetSelectedCourceActions | GetSelectedCourseActionsSuccess | GetSelectedCourseActionsError



