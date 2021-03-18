import { Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { NextCourse } from "../models/next-course.model";
import { NextCourseActions, NextCourseActionsTypes } from "./next-course.actions";



export enum NextCoursesStatusEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"

}


export interface NextCoursesState {
  courses: NextCourse[],
  errorMessage: any,
  dataStatus: NextCoursesStatusEnum

}
const initState: NextCoursesState= {
  courses: [],
  errorMessage: "",
  dataStatus: NextCoursesStatusEnum.INITIAL

}

export function nextCoursesReducer(state: NextCoursesState=initState, action: Action): NextCoursesState {
  switch(action.type) {
    case NextCourseActionsTypes.GET_ALL_NEXTCOURSES:
      return {...state, dataStatus: NextCoursesStatusEnum.LOADING}
    case NextCourseActionsTypes.GET_ALL_NEXTCOURSES_SUCCESS:
      return {...state, dataStatus: NextCoursesStatusEnum.LOADED, courses: (<NextCourseActions>action).payload}
    case NextCourseActionsTypes.GET_ALL_NEXTCOURSES_ERROR:
   //   console.log('yoooooooooooouuuuuuuuuuuuuuuppppppppppyyyyyyyyyyyy !!',(<NextCourseActions>action).payload)
      return {...state, dataStatus: NextCoursesStatusEnum.ERROR, errorMessage: (<NextCourseActions>action).payload}

    case NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE:
      return {...state, dataStatus: NextCoursesStatusEnum.LOADING}
    case NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE_SUCCESS:
      return {...state, dataStatus: NextCoursesStatusEnum.LOADED, courses: (<NextCourseActions>action).payload}
    case NextCourseActionsTypes.GET_SELECTED_NEXTCOURSE_ERROR:
      return {...state, dataStatus: NextCoursesStatusEnum.ERROR, errorMessage: (<NextCourseActions>action).payload}

    default: return {...state}
  }

}

let nextCoursesFS = createFeatureSelector<NextCourse>('nextCoursesState')
export let participantsSelector = createSelector(nextCoursesFS, state => state)

