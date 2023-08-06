import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignReportsToUserComponent } from './assign-reports-to-user.component';

describe('AssignReportsToUserComponent', () => {
  let component: AssignReportsToUserComponent;
  let fixture: ComponentFixture<AssignReportsToUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignReportsToUserComponent]
    });
    fixture = TestBed.createComponent(AssignReportsToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
