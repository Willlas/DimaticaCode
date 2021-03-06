import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public onError = new Subject<{ code: number, message: string }>();

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) { }

  public async get(uri: string): Promise<any[]> {
    try {
      return await this.httpClient.get(`api/${uri}`, this.httpOptions).toPromise() as any[];
    } catch (e) {
      console.log(e);
    }
  }

  public async post(uri: string, body: any): Promise<any> {
    try {
      return await this.httpClient.post(`api/${uri}`, JSON.stringify(body), this.httpOptions).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  public async put(uri: string, body: any): Promise<any> {
    try {
      return await this.httpClient.put(`api/${uri}`, JSON.stringify(body), this.httpOptions).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  public async delete(uri: string): Promise<any> {
    try {
      return await this.httpClient.delete<any>(`api/${uri}`, this.httpOptions).toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
