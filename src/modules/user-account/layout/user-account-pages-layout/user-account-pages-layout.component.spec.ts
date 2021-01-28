import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountPagesLayoutComponent } from './user-account-pages-layout.component';

describe('UserAccountPagesLayoutComponent', () => {
  let component: UserAccountPagesLayoutComponent;
  let fixture: ComponentFixture<UserAccountPagesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountPagesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
