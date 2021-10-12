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

  constructor(private dutyService: DutyService) { }

  public async ngOnInit(): Promise<void> {
    this.dutyList = await this.dutyService.get();
  }

}
