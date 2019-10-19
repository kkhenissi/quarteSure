import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'less-probable',
  templateUrl: './less-probable.component.html',
  styleUrls: ['./less-probable.component.css']
})
export class LessProbableComponent implements OnInit {
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges;
    this.tableLessProbable$ = of(this.tableLessProbable);
    console.log('ddddddddddddddddddddddddd>>>>>>>>><',this.tableLessProbable)
  }
  @Input() tableLessProbable
  tableLessProbable$: Observable<number[]>;
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

}
