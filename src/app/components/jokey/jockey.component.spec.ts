import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeyComponent } from './jockey.component';

describe('JokeyComponent', () => {
  let component: JokeyComponent;
  let fixture: ComponentFixture<JokeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
