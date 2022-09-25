import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallDemoComponent } from './http-call-demo.component';

describe('HttpCallDemoComponent', () => {
  let component: HttpCallDemoComponent;
  let fixture: ComponentFixture<HttpCallDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCallDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
