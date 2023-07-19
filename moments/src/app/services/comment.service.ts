import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Comment } from '../Comment';

import { Reponse } from '../Response';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseApiUrl= environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http:HttpClient) { }

  createComment(data: Comment): Observable<Reponse<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Reponse<Comment>>(url, data);
  }
}
