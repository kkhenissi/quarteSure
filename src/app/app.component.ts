import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { forkJoin, zip, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import {of, Observable,range} from 'rxjs';
import { delay, skip, filter, tap, distinctUntilChanged, map, withLatestFrom, take, first, merge  } from 'rxjs/operators';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
sourceOne =   of('1','2','3','4','5','6','7','8','9','10','11','12');
sourceTwo =   of('1','2','3','4','5','6','7','8','9','10','11','12');
surceThree =   of('1','2','3','4','5','6','7','8','9','10','11','12');
sourceFour =   of('1','2','3','4','5','6','7','8','9','10','11','12');

 
  tableWithRedendence: string[] =[];
  tableWithoutRedendence: string[] =[];
  tableOfSumeitem: string[]=[];
  allJockeys: string[];
  allJockeys$: Observable<string[]>
  deletedJokeys:string[] = [];
  deletedJockeys$:Observable<string[]>

  ngOnInit(): void {
 
  this.allJockeys = ['1','2','3','4','5','6','7','8','9','10','11','12'];


    this.allJockeys$ = of(this.allJockeys);
    this.deletedJockeys$ = new BehaviorSubject(this.deletedJokeys);
 
    this.startAction();
 
}


startAction() {
 // this.sourceOne.split(",")

  for (let i = 1; i < 20 ;i++) {
     
    for (let j = i+1; j < 20 ;j++) {

       for (let k = j+1; k < 20 ;k++) {
  
      let contCalc:number = 0;
                      zip(
                          this.sourceOne,
                          this.sourceTwo.pipe(skip(i)),
                          this.surceThree.pipe(skip(j)),
                          this.sourceFour.pipe(skip(k))
                        )
                        
                           .subscribe(([val1, val2, val3, val4] )=> {
                           this.tableWithRedendence.push([val1, val2, val3, val4].toString());                        
                            
                        });
                        }
      }
    }

 

    console.log("resultat1", this.tableWithRedendence);
  //  console.log("contCalc", this.tableOfSumeitem);

    this.spliceRedendence();
   
}
private spliceRedendence() {

        of(this.tableWithRedendence).pipe(filter(data => {
          return  ((parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2])+  parseInt(data[3])) != 111  && (parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2])) != 10 );
        })).subscribe(rst => {
          this.tableWithoutRedendence.push(rst.toString())
          
        console.log("tableWithoutRedendence", this.tableWithoutRedendence);
  })


}
remouvefromAllJockeys(xnbr) {
  console.log("conhhhhhhhhhhhhhhhhhhhhhhhh", xnbr);
  let f = xnbr -1
  this.allJockeys.splice(xnbr, 1);
  this.deletedJokeys.push(xnbr+1)
 
  this.deletedJockeys$.subscribe(data => console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',data));
  const sddourceOne = this.sourceOne.pipe(filter(num => num != xnbr))
  this.sourceTwo = this.sourceTwo.pipe(filter(num => num != xnbr))
  this.surceThree = this.surceThree.pipe(filter(num => num != xnbr))
  this.sourceFour = this.sourceFour.pipe(filter(num => num != xnbr))

  //}))
 console.log("this.deletedthis.sourceOnethis.sourceOnethis.sourceOnethis.sourceOnethis.sourceOneJokeus", sddourceOne);
 
   this.tableWithRedendence=[]
   this.startAction();
 
 
   
}
   
}
