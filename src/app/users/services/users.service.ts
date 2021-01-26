import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserRequest } from '../models/create-user-request.model';
import { CreateUserResponse } from '../models/create-user-response.model';
import { DeleteUserResponse } from '../models/delete-user-response.model';
import { UpdateUserRequest } from '../models/update-user-request.model';
import { UpdateUserResponse } from '../models/update-user-response.model';
import { UserDetails } from '../models/user-details.model';
import { UserListDto } from '../models/users-list-model';

const baseUrl = 'https://localhost:44363/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<UserListDto> {
    //return this.http.get<UserListDto>(baseUrl, {});
    return this.http.get<UserListDto>(`${baseUrl}/GetAll`, {});
  }

  getById(id: number): Observable<UserDetails> {
    const request = new HttpParams().set('id', id.toString());
    //return this.http.get<UserDetails>(`${baseUrl}/${id}`);
    return this.http.get<UserDetails>(`${baseUrl}/Get`, { //`${baseUrl}/${id}`
    params: request
  });
  }

  create(request: CreateUserRequest): Observable<CreateUserResponse> {
    //return this.http.post<CreateUserResponse>(baseUrl, request);
    return this.http.post<CreateUserResponse>(`${baseUrl}/Create`, request);
  }

  update(request: UpdateUserRequest): Observable<UpdateUserResponse> {
    //return this.http.put<CreateUserResponse>(`${baseUrl}/${request.id}`, request);
    return this.http.put<CreateUserResponse>(`${baseUrl}/Update`, request);
  }

  delete(id: number): Observable<DeleteUserResponse> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete<DeleteUserResponse>(`${baseUrl}/Delete`, {params});
    // return this.http.delete<DeleteUserResponse>(`${baseUrl}/${id}`, {params});
  }


}
