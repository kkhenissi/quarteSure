import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumProbableComponent } from './medium-probable.component';

describe('MediumProbableComponent', () => {
  let component: MediumProbableComponent;
  let fixture: ComponentFixture<MediumProbableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumProbableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumProbableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
