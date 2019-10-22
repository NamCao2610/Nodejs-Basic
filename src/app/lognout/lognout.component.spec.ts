import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LognoutComponent } from './lognout.component';

describe('LognoutComponent', () => {
  let component: LognoutComponent;
  let fixture: ComponentFixture<LognoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
