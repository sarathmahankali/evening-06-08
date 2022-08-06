import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepSidebarComponent } from './recep-sidebar.component';

describe('RecepSidebarComponent', () => {
  let component: RecepSidebarComponent;
  let fixture: ComponentFixture<RecepSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
