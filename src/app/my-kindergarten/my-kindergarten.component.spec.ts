import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKindergartenComponent } from './my-kindergarten.component';

describe('MyKindergartenComponent', () => {
  let component: MyKindergartenComponent;
  let fixture: ComponentFixture<MyKindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyKindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
