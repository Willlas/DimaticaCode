import { Component, OnInit } from '@angular/core';
import { DutyDto } from '../../interfaces/duty.dto.interface';
import { DutyService } from '../../services/duty.service';

@Component({
  selector: 'app-duty-index',
  templateUrl: './duty-index.component.html',
  styleUrls: ['./duty-index.component.css']
})
export class DutyIndexComponent implements OnInit {

  public dutyList: DutyDto[];
  public newDuty: string;

  constructor(private dutyService: DutyService) { }

  public async ngOnInit(): Promise<void> {
    await this.setDutyList();
  }

  public async createDuty(): Promise<void> {
    const duty: DutyDto = { name : this.newDuty };
    await this.dutyService.create(duty);
    alert("duty created");
    this.newDuty = "";
    this.setDutyList();
  }
  private async setDutyList(): Promise<void> {
    this.dutyList = await this.dutyService.get();
  }
}
