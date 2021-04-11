import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceGrilleComponent } from './choice-grille.component';

describe('ChoiceGrilleComponent', () => {
  let component: ChoiceGrilleComponent;
  let fixture: ComponentFixture<ChoiceGrilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceGrilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceGrilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
