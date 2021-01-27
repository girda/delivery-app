import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfileEditComponent } from './modal-profile-edit.component';

describe('ModalProfileEditComponent', () => {
  let component: ModalProfileEditComponent;
  let fixture: ComponentFixture<ModalProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
