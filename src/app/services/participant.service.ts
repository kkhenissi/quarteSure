import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SelectedCourse } from '../models/selected-course.model';

const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  host= environment.host;
  cource_url="https://online.turfinfo.api.pmu.fr/rest/client/1/programme";

  constructor(private httpClient: HttpClient) { }

  public getParticipants(refCourse: string): Observable<SelectedCourse[]> {
   return  this.httpClient.get<SelectedCourse[]>(this.cource_url+refCourse);
  }

  getSelectedParticipants(): Observable<SelectedCourse[]> {
    return  this.httpClient.get<SelectedCourse[]>(this.host+'/participants');
   }
}
