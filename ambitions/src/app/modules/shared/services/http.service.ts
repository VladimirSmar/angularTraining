import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://randomuser.me/api/';

  get(path: string, params?: object): Observable<any> {
    return this.http.get(this.apiUrl + path).pipe(
      map((res: any) => {
        return res.results;
      })
    );
  }

  post(path: string, params?: object): Observable<any> {
    return this.http.post(this.apiUrl + path, params).pipe(
      map((res: any) => {
        return res.results;
      })
    );
  }

  put(path: string, params?: object): Observable<any> {
    return this.http.put(this.apiUrl + path, params).pipe(
      map((res: any) => {
        return res.results;
      })
    );
  }
}
