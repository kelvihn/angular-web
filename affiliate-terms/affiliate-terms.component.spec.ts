import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateTermsComponent } from './affiliate-terms.component';

describe('AffiliateTermsComponent', () => {
  let component: AffiliateTermsComponent;
  let fixture: ComponentFixture<AffiliateTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
