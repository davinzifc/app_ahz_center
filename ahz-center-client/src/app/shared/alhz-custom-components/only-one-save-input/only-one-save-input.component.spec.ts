import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyOneSaveInputComponent } from './only-one-save-input.component';

describe('OnlyOneSaveInputComponent', () => {
  let component: OnlyOneSaveInputComponent;
  let fixture: ComponentFixture<OnlyOneSaveInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyOneSaveInputComponent]
    });
    fixture = TestBed.createComponent(OnlyOneSaveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
