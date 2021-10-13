import { Component, OnInit, Input } from '@angular/core';
import { DutyDto } from '../../interfaces/duty.dto.interface';

@Component({
  selector: 'app-duty-table',
  templateUrl: './duty-table.component.html',
  styleUrls: ['./duty-table.component.css']
})
export class DutyTableComponent implements OnInit {

  @Input() public dutyList: DutyDto[]; 

  constructor() { }

  public ngOnInit(): void {
  }

}
