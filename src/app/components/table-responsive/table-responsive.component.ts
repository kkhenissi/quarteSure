import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'basic-table',
templateUrl: './table-responsive.component.html',
styleUrls: ['./table-responsive.component.css'],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicTableComponent implements OnInit, AfterViewChecked {


  @Input('sourceTable') elements: any = [];
  @Input('choise') nbrColone: number;

  headElements = [];
  head2Elements = ['One', 'Two'];
  head3Elements = ['One', 'Two', 'Three'];
  head4Elements = ['One', 'Two', 'Three', 'For'];
  head5Elements = ['One', 'Two', 'Three', 'For', 'Five'];
  head6Elements = ['One', 'Two', 'Three', 'For', 'Five', 'Six'];
  head7Elements = ['One', 'Two', 'Three', 'For', 'Five', 'Six', 'Seven'];

  constructor() {

    // store.pipe(select(state => {
    //     this.nbrColone = state.choise ;
    // }));

  }


  ngAfterViewChecked(): void {





  }

  ngOnInit(){


  }
  ngOnChanges(){
    if(this.nbrColone == 2) {
      this.headElements = this.head2Elements
    }else if(this.nbrColone == 3) {
      this.headElements = this.head3Elements
    } else if(this.nbrColone == 4) {
      this.headElements = this.head4Elements
    } else if (this.nbrColone == 5) {
      this.headElements = this.head5Elements
    } else if (this.nbrColone == 6 ) {
      this.headElements = this.head6Elements
    } else if(this.nbrColone == 7) {
      this.headElements = this.head7Elements

    }

  }


  trackElement(index, elmt) {
  //  console.log('-----***************----------',elmt, index);
    return elmt ? elmt.id : undefined;

}
}
