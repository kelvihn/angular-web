import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnepFormComponent } from './vnep-form.component';

describe('VnepFormComponent', () => {
  let component: VnepFormComponent;
  let fixture: ComponentFixture<VnepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
