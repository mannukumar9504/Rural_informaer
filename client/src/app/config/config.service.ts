import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
  BASE_URL: string = "http://localhost:9090";
  getConfigResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.BASE_URL+ '/mannu', { observe: 'response' });
  }
}
