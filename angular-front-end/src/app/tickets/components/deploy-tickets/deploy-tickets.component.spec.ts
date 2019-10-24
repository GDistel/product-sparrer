import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployTicketsComponent } from './deploy-tickets.component';

describe('DeployTicketsComponent', () => {
  let component: DeployTicketsComponent;
  let fixture: ComponentFixture<DeployTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
