import { Injectable } from '@angular/core';
import { DutyApiService } from '../../services/duty.service';
import { DutyDto } from '../interfaces/duty.dto.interface';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  constructor(private dutyService: DutyApiService) { }

  public async get(): Promise<DutyDto[]> {
    return await this.dutyService.get();
  }

  public async create(body: DutyDto): Promise<DutyDto> {
    return await this.dutyService.create(body);
  }

  public async update(body: DutyDto): Promise<DutyDto> {
    return await this.dutyService.update(body);
  }

  public async delete(id: string): Promise<boolean> {
    return await this.dutyService.delete(id);
  }
}
