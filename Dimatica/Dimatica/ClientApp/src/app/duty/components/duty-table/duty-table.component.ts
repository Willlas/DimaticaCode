import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DutyDto } from '../../interfaces/duty.dto.interface';

@Component({
  selector: 'app-duty-table',
  templateUrl: './duty-table.component.html',
  styleUrls: ['./duty-table.component.css']
})
export class DutyTableComponent implements OnInit {

  @Input() public dutyList: DutyDto[];

  @Output() public onupdate = new EventEmitter<string>();
  @Output() public ondelete = new EventEmitter<string>();
  constructor() { }

  public ngOnInit(): void {
  }

  public updateItem(id: string): void {
    this.onupdate.emit(id);
  }

  public deleteItem(id: string): void {
    this.ondelete.emit(id);
  }
}
