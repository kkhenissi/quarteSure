import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NextCourse } from '../models/next-course.model';
import { SelectedCourse } from '../models/selected-course.model';
const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class NextCoursesService {
  host= environment.host;
  cource_url="https://online.turfinfo.api.pmu.fr/rest/client/1/programme/prochainesCourses";

  constructor(private httpClient: HttpClient) { }

  getNextCourses(): Observable<NextCourse[]> {
   return  this.httpClient.get<NextCourse[]>(this.host+'/nextcourses');
  }

  getSelectedNextCourse(): Observable<SelectedCourse[]> {
    return  this.httpClient.get<SelectedCourse[]>(this.host+'/participants');
   }
}
