import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DutyApiService {

  private baseUri = 'Duty';

  constructor(private apiService: ApiService) { }

  public async get<DutyDto>(): Promise<DutyDto[]> {
    return await this.apiService.get(this.baseUri);
  }

  public async create<DutyDto>(body: DutyDto): Promise<DutyDto> {
    return await this.apiService.post(this.baseUri, body);
  }

  public async update<DutyDto>(body: DutyDto): Promise<DutyDto> {
    return await this.apiService.put(this.baseUri, body);
  }

  public async delete<DutyDto>(): Promise<DutyDto[]> {
    return await this.apiService.delete(this.baseUri);
  }
}
