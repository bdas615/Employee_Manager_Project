import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddNewComponent } from './employee-add-new.component';

describe('EmployeeAddNewComponent', () => {
  let component: EmployeeAddNewComponent;
  let fixture: ComponentFixture<EmployeeAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
