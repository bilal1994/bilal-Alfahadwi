import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addskillComponent } from './addskill.component';

describe('AddskillComponent', () => {
  let component: addskillComponent;
  let fixture: ComponentFixture<addskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
