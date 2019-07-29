import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jockey',
  templateUrl: './jockey.component.html',
  styleUrls: ['./jockey.component.css']
})
export class JokeyComponent implements OnInit {
  @Input('nbr') numeroJockey:number;
  @Output() removeJockey  = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
   // this.numeroJockey = 0;
  }

  remouveMe() {
          this.removeJockey.emit(this.numeroJockey)
  }

}
