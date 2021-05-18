import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comic} from '../services/models/Comic';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ComicService {
  constructor(private http: HttpClient) { }
  getComic(): Observable<any> { 
    debugger
  return this.http.get<any> ('https://xkcd.com/181/info.0');
  }
}
