import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpleComponent } from './perple.component';

describe('PerpleComponent', () => {
  let component: PerpleComponent;
  let fixture: ComponentFixture<PerpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
