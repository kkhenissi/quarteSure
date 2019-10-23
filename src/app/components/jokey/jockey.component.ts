import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jockey',
  templateUrl: './jockey.component.html',
  styleUrls: ['./jockey.component.css']
})
export class JokeyComponent implements OnInit {
  coteJockey: number;
  @Input('nbr') numeroJockey:number;
  @Output() coteJockeyChange = new EventEmitter<number[]>();
  @Output() renvoiNumJockey  = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
   // this.numeroJockey = 0;
  }

  remouveMe() {
          this.renvoiNumJockey.emit(this.numeroJockey)
  }
  coteBlur() {
           
          this.coteJockeyChange.emit([this.numeroJockey,this.coteJockey]);
 
  }

}
