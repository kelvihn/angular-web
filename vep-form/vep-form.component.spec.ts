import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VepFormComponent } from './vep-form.component';

describe('VepFormComponent', () => {
  let component: VepFormComponent;
  let fixture: ComponentFixture<VepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
