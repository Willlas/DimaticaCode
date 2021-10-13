import { Component, OnInit } from '@angular/core';
import { DutyDto } from '../../interfaces/duty.dto.interface';
import { DutyService } from '../../services/duty.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-duty-index',
  templateUrl: './duty-index.component.html',
  styleUrls: ['./duty-index.component.css']
})
export class DutyIndexComponent implements OnInit {

  public dutyList: DutyDto[];
  public dutyControl: FormGroup;

  constructor(private dutyService: DutyService) { }

  public async ngOnInit(): Promise<void> {
    await this.setDutyList();
    this.dutyControl = new FormGroup({
      dutyInput: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(4)
        ])
    });
  }

  public async createDuty(): Promise<void> {
    if (this.dutyControl.valid) {
      const duty: DutyDto = { name: this.dutyControl.get('dutyInput').value };
      await this.dutyService.create(duty);
      alert("duty created");
      this.dutyControl.get("dutyInput").setValue("");
      this.setDutyList();
    } else {
      this.dutyControl.markAsTouched()
      alert("something is wrong");
    }
    
  }

  public async updateDuty(id: string) {
    if (this.dutyControl.valid) {
      const duty: DutyDto = { id, name: this.dutyControl.get('dutyInput').value };
      await this.dutyService.update(duty);
      alert("duty update");
      this.dutyControl.get("dutyInput").setValue("");
      this.setDutyList();
    } else {
      this.dutyControl.markAsTouched()
      alert("something is wrong");
    }
  }

  public async deleteDuty(id: string): Promise<void> {
    await this.dutyService.delete(id);
    await this.setDutyList();
  }

  private async setDutyList(): Promise<void> {
    this.dutyList = await this.dutyService.get();
  }
}
