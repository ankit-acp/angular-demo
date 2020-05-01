import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, finalize, tap } from "rxjs/operators";
import { IUsers, IUsersRes, ICreateUserRes, ICreateUser } from '../models/IUsers';
import { HttpHelper } from 'src/app/shared/helpers/http.helper';
import { ICars } from '../models/ICar';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpHelper {

  baseUrl: string = 'http://dummy.restapiexample.com';

  constructor(private http: HttpClient) {
    super();
  }

  public getUsers(): Observable<IUsersRes> {
    return this.http.get<IUsersRes>(`${this.baseUrl}/api/v1/employees`, { headers });
  }

  public createUser(user: ICreateUser): Observable<ICreateUserRes> {
    return this.http.post<ICreateUserRes>(`${this.baseUrl}/api/v1/create`, { user }, { headers });
  }

  public updateUser(user: ICreateUser, id: number): Observable<ICreateUserRes> {
    return this.http.put<ICreateUserRes>(`${this.baseUrl}/api/v1/update/${id}`, { user }, { headers });
  }

}
