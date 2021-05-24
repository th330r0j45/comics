import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comic} from '../services/models/Comic';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComicService {
  constructor(private http: HttpClient) {
  }
  // getComic(){
  //   debugger
  //   return this.http.get<Comic>(
  //     `${environment.url_api}/${id}/info.0.json`);
  //     console.log(this.getComic);
  // }
  getComics(): Observable<any> {
    const id = Math.ceil(Math.random() * 2464).toString();
    debugger
    return this.http.get<any[]>(`${environment.url_api}/${id}/info.0.json`);
  }
}
