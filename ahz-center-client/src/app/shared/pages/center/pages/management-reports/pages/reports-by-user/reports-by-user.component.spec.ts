import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsByUserComponent } from './reports-by-user.component';

describe('ReportsByUserComponent', () => {
  let component: ReportsByUserComponent;
  let fixture: ComponentFixture<ReportsByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsByUserComponent]
    });
    fixture = TestBed.createComponent(ReportsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
