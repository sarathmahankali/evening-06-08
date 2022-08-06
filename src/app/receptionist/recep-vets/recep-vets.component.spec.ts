import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepVetsComponent } from './recep-vets.component';

describe('RecepVetsComponent', () => {
  let component: RecepVetsComponent;
  let fixture: ComponentFixture<RecepVetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepVetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
