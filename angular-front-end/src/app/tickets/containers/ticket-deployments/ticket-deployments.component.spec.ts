import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDeploymentsComponent } from './ticket-deployments.component';

describe('TicketDeploymentsComponent', () => {
  let component: TicketDeploymentsComponent;
  let fixture: ComponentFixture<TicketDeploymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDeploymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDeploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
