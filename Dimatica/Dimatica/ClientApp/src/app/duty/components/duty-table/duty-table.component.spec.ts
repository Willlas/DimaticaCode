import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyTableComponent } from './duty-table.component';

describe('DutyTableComponent', () => {
  let component: DutyTableComponent;
  let fixture: ComponentFixture<DutyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
