import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTicketComponent } from './management-ticket.component';

describe('ManagementTicketComponent', () => {
  let component: ManagementTicketComponent;
  let fixture: ComponentFixture<ManagementTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementTicketComponent]
    });
    fixture = TestBed.createComponent(ManagementTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
