import { Injectable } from '@angular/core';
import { DutyApiService } from '../../services/duty.service';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  constructor(private dutyService: DutyApiService) { }

  public async get<DutyDto>(): Promise<DutyDto[]> {
    return await this.dutyService.get();
  }

  public async create<DutyDto>(body: DutyDto): Promise<DutyDto> {
    return await this.dutyService.create(body);
  }

  public async update<DutyDto>(body: DutyDto): Promise<DutyDto> {
    return await this.dutyService.update(body);
  }

  public async delete<DutyDto>(): Promise<DutyDto[]> {
    return await this.dutyService.delete();
  }
}
