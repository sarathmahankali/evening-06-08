import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPetsComponent } from './doc-pets.component';

describe('DocPetsComponent', () => {
  let component: DocPetsComponent;
  let fixture: ComponentFixture<DocPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
