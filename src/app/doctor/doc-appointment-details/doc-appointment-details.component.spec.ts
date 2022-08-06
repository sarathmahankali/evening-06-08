import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAppointmentDetailsComponent } from './doc-appointment-details.component';

describe('DocAppointmentDetailsComponent', () => {
  let component: DocAppointmentDetailsComponent;
  let fixture: ComponentFixture<DocAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAppointmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
