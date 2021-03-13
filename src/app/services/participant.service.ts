import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Participant } from '../models/participants.model';
const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  host= environment.host;
  cource_url="https://online.turfinfo.api.pmu.fr/rest/client/1/programme/13032021/R2/C1/participants?specialisation=INTERNET";

  constructor(private httpClient: HttpClient) { }

  public getParticipants(): Observable<Participant[]> {
   return  this.httpClient.get<Participant[]>(this.host+'/participants');
  }

  getSelectedParticipants(): Observable<Participant[]> {
    return  this.httpClient.get<Participant[]>(this.host+'/participants');
   }
}
