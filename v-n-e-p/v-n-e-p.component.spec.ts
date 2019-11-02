import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VNEPComponent } from './v-n-e-p.component';

describe('VNEPComponent', () => {
  let component: VNEPComponent;
  let fixture: ComponentFixture<VNEPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VNEPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VNEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
