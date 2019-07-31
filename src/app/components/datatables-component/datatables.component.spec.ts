import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesComponentComponent } from './datatables-component.component';

describe('DatatablesComponentComponent', () => {
  let component: DatatablesComponentComponent;
  let fixture: ComponentFixture<DatatablesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
