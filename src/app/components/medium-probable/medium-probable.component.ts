import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'medium-probable',
  templateUrl: './medium-probable.component.html',
  styleUrls: ['./medium-probable.component.css']
})
export class MediumProbableComponent implements OnInit, AfterViewChecked {

  @Input() tableMediumProbable
  tableMediumProbable$: Observable<number[]>;
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges;
    this.tableMediumProbable$ = of(this.tableMediumProbable);
    console.log('ddddddddddddddddddddddddd>>>>>>>>><',this.tableMediumProbable)
  }

}
