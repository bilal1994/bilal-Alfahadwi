import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfonteComponent } from './myfonte.component';

describe('MyfonteComponent', () => {
  let component: MyfonteComponent;
  let fixture: ComponentFixture<MyfonteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfonteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
