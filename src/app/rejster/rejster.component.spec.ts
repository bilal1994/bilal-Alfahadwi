import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejsterComponent } from './rejster.component';

describe('RejsterComponent', () => {
  let component: RejsterComponent;
  let fixture: ComponentFixture<RejsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
