import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentInfoComponent } from './environment-info.component';

describe('EnvironmentInfoComponent', () => {
  let component: EnvironmentInfoComponent;
  let fixture: ComponentFixture<EnvironmentInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
