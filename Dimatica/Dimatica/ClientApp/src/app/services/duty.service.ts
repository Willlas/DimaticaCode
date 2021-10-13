import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DutyDto } from '../duty/interfaces/duty.dto.interface'

@Injectable({
  providedIn: 'root'
})
export class DutyApiService {

  private baseUri = 'Duty';

  constructor(private apiService: ApiService) { }

  public async get(): Promise<DutyDto[]> {
    return await this.apiService.get(this.baseUri);
  }

  public async create(body: DutyDto): Promise<DutyDto> {
    return await this.apiService.post(this.baseUri, body);
  }

  public async update(body: DutyDto): Promise<DutyDto> {
    return await this.apiService.put(this.baseUri+'/'+body.id, body);
  }

  public async delete(id: string): Promise<boolean> {
    return await this.apiService.delete(this.baseUri + '/' + id);
  }
}
