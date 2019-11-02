import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmServiceComponent } from './dbm-service.component';

describe('DbmServiceComponent', () => {
  let component: DbmServiceComponent;
  let fixture: ComponentFixture<DbmServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbmServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
