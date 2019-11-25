import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailForgotComponent } from './email-forgot.component';

describe('EmailForgotComponent', () => {
  let component: EmailForgotComponent;
  let fixture: ComponentFixture<EmailForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
