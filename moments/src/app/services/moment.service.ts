import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Moment } from '../Moments';

import { Reponse } from '../Response';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl= environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http:HttpClient) { }

  getMoments():Observable<Reponse<Moment[]>>{

    return this.http.get<Reponse<Moment[]>>(this.apiUrl);
  }

  createMoment(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);

  }
}
