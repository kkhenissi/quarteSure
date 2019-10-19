import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessProbableComponent } from './less-probable.component';

describe('LessProbableComponent', () => {
  let component: LessProbableComponent;
  let fixture: ComponentFixture<LessProbableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessProbableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessProbableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
