import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreconditionsComponent } from './preconditions.component';

describe('PreconditionsComponent', () => {
  let component: PreconditionsComponent;
  let fixture: ComponentFixture<PreconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreconditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
