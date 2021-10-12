import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private httpOptions = {
    headers: new HttpHeaders(),
   
  };

  public onError = new Subject<{ code: number, message: string }>();

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) { }

  public async get<T>(uri: string): Promise<T> {
    try {
      return await this.httpClient.get<T>(`api/${uri}`).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  public async post<T>(uri: string, body: any): Promise<T> {
    try {
      return await this.httpClient.post<T>(`api/${uri}`, JSON.stringify(body)).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  public async put<T>(uri: string, body: any): Promise<T> {
    try {
      return await this.httpClient.put<T>(`api/${uri}`, JSON.stringify(body)).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  public async delete<T>(uri: string): Promise<T> {
    try {
      return await this.httpClient.delete<T>(`api/${uri}`).toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
