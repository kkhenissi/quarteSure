import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'medium-probable',
  templateUrl: './medium-probable.component.html',
  styleUrls: ['./medium-probable.component.css']
})
export class MediumProbableComponent implements OnInit, AfterViewChecked {

  nbrMeduimProbable: number[]=[];
  @Input() tableMediumProbable
  tableMediumProbable$: Observable<number[]>;
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }
 
  ngAfterViewChecked(): void {
   
    this.tableMediumProbable$ = of(this.tableMediumProbable);
    if(this.tableMediumProbable) {
    // this.tableMediumProbable.forEach(element => {
    //   this.nbrMeduimProbable.push(this.tableMediumProbable.indexOf(element)+1);
    //   console.log('22222222222222222222222222222222>>',this.nbrMeduimProbable);
    // });
  }
   // console.log('ddddddddddddddddddddddddd>>>>>>>>><',this.tableMediumProbable)
  }

}
