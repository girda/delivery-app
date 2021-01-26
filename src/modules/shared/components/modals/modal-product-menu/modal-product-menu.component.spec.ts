import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductMenuComponent } from './modal-product-menu.component';

describe('ModalProductMenuComponent', () => {
  let component: ModalProductMenuComponent;
  let fixture: ComponentFixture<ModalProductMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProductMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
