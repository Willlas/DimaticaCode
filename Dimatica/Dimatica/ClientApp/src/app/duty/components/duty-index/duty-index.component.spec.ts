import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyIndexComponent } from './duty-index.component';

describe('DutyIndexComponent', () => {
  let component: DutyIndexComponent;
  let fixture: ComponentFixture<DutyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
