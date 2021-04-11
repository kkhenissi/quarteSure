import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent implements OnInit, AfterViewChecked {
  nbrMeduimProbable: number[]=[];
  @Input() iaTableResult
  iaTableResult$: Observable<number[]>;

  constructor() { }
  ngAfterViewChecked(): void {
    this.iaTableResult$ = of(this.iaTableResult);
  }

  ngOnInit(): void {
  }

}
