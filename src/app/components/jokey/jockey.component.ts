import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { DellSelectedParticipantActions, ParticipantActionsTypes } from 'src/app/ngrx/participant.actions';

@Component({
  selector: 'app-jockey',
  templateUrl: './jockey.component.html',
  styleUrls: ['./jockey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeyComponent implements OnInit, DoCheck{

  @Input('nbr') numeroJockey:number;
  @Input() coteJockey: number;
  @Output() coteJockeyChange = new EventEmitter<number[]>();
  @Output() renvoiNumJockey  = new EventEmitter<number>();
  constructor( private cdRef:ChangeDetectorRef,
               private store: Store) { }
  ngDoCheck(): void {
      this.coteJockeyChange.emit([this.numeroJockey,this.coteJockey]);
  }


  ngOnInit() {
   // this.numeroJockey = 0;
  //  this.cdRef.detectChanges();
  }

  remouveMe() {
          this.store.dispatch(new DellSelectedParticipantActions(ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT))
          this.renvoiNumJockey.emit(this.numeroJockey)
  }
  coteBlur() {

          this.coteJockeyChange.emit([this.numeroJockey,this.coteJockey]);

  }

}
