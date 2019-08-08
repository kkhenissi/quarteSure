import { Component, OnInit, Input ,OnChanges} from '@angular/core';
 

@Component({
selector: 'basic-table',
templateUrl: './table-responsive.component.html',
styleUrls: ['./table-responsive.component.css'],
})
export class BasicTableComponent implements OnInit,OnChanges {
  @Input('sourceTable') elements: any = [];
  @Input('choise') nbrColone: number;
  headElements = [];

  head4Elements = ['One', 'Two', 'Three', 'For'];
  head5Elements = ['One', 'Two', 'Three', 'For', 'Five'];
  head6Elements = ['One', 'Two', 'Three', 'For', 'Five','Six'];
  head7Elements = ['One', 'Two', 'Three', 'For', 'Five','Six','Seven'];

  constructor() {

  }
 
  ngOnInit(){

    
  }
  ngOnChanges(){
    if(this.nbrColone == 4) {
      this.headElements = this.head4Elements
    } else if (this.nbrColone == 5) {
      this.headElements = this.head5Elements
    } else if (this.nbrColone == 6 ) {
      this.headElements = this.head6Elements
    } else if(this.nbrColone == 7) {
      this.headElements = this.head7Elements
    }
   console.log('------------------------',  this.nbrColone)
  }
}