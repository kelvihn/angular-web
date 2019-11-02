import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedEstatePropertyComponent } from './verified-estate-property.component';

describe('VerifiedEstatePropertyComponent', () => {
  let component: VerifiedEstatePropertyComponent;
  let fixture: ComponentFixture<VerifiedEstatePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedEstatePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedEstatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
