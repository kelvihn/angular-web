import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOnTheWayComponent } from './service-on-the-way.component';

describe('ServiceOnTheWayComponent', () => {
  let component: ServiceOnTheWayComponent;
  let fixture: ComponentFixture<ServiceOnTheWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOnTheWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOnTheWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
