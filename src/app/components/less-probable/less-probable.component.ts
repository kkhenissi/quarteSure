import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'less-probable',
  templateUrl: './less-probable.component.html',
  styleUrls: ['./less-probable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessProbableComponent implements OnInit, AfterViewChecked {
  nbrLessProbable: number[];
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges;
    this.tableLessProbable$ = of(this.tableLessProbable);
    // this.tableLessProbable.forEach(element => {
    //   this.nbrLessProbable.push(this.tableLessProbable.indexOf(element)+1);
    //   console.log('22222222222222222222222222222222>>',this.nbrLessProbable);
    // });
   // console.log('ddddddddddddddddddddddddd>>>>>>>>><',this.tableLessProbable)
  }
  @Input() tableLessProbable
  tableLessProbable$: Observable<number[]>;
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

}
