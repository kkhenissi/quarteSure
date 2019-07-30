import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {FormControl, FormGroup} from '@angular/forms';
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
sourceFive =   of('1','2','3','4','5','6','7','8','9','10','11','12');
sourceSixe =   of('1','2','3','4','5','6','7','8','9','10','11','12');
surceSeven =   of('1','2','3','4','5','6','7','8','9','10','11','12');


 
  tableWithRedendence: string[] =[];
  tableWithoutRedendence: string[] =[];
  tableOfSumeitem: string[]=[];
  allJockeys: string[];
  allJockeys$: Observable<string[]>
  deletedJokeys:string[] = [];
  deletedJockeys$:Observable<string[]>



  form = new FormGroup({
    choise: new FormControl('4'),
  });



  ngOnInit(): void {
 
  this.allJockeys = ['1','2','3','4','5','6','7','8','9','10','11','12'];


    this.allJockeys$ = of(this.allJockeys);
    this.deletedJockeys$ = new BehaviorSubject(this.deletedJokeys);
 
    this.startAction();
 
}


startAction() {
 // this.sourceOne.split(",")
 this.tableWithRedendence=[];
  for (let i = 1; i < 20 ;i++) {
     
    for (let j = i+1; j < 20 ;j++) {

       for (let k = j+1; k < 20 ;k++) {
             if (this.form.value.choise == 4) {
            
                      zip(
                          this.sourceOne,
                          this.sourceTwo.pipe(skip(i)),
                          this.surceThree.pipe(skip(j)),
                          this.sourceFour.pipe(skip(k))
                        )
                        
                           .subscribe(([val1, val2, val3, val4] )=> {
                           this.tableWithRedendence.push([val1, val2, val3, val4].toString());                        
                            
                        });
             } else if (this.form.value.choise == 5) {
                   for (let l = k+1; l < 20 ;l++) {
                        zip(
                          this.sourceOne,
                          this.sourceTwo.pipe(skip(i)),
                          this.surceThree.pipe(skip(j)),
                          this.sourceFour.pipe(skip(k)),
                          this.sourceFour.pipe(skip(l))
                        )
                        
                          .subscribe(([val1, val2, val3, val4, val5] )=> {
                          this.tableWithRedendence.push([val1, val2, val3, val4, val5].toString());                        
                            
                        });
                    }          

             } else if(this.form.value.choise == 6) {
              for (let l = k+1; l < 20 ;l++) {
                for (let m = l+1; m < 20 ;m++) {
                        zip(
                          this.sourceOne,
                          this.sourceTwo.pipe(skip(i)),
                          this.surceThree.pipe(skip(j)),
                          this.sourceFour.pipe(skip(k)),
                          this.sourceFour.pipe(skip(l)),
                          this.sourceFour.pipe(skip(m))
                        )
                        
                          .subscribe(([val1, val2, val3, val4, val5, val6] )=> {
                          this.tableWithRedendence.push([val1, val2, val3, val4, val5, val6].toString());                        
                            
                        });
                 }        


              }


             } else if(this.form.value.choise == 7) {
              for (let l = k+1; l < 20 ;l++) {
                for (let m = l+1; m < 20 ;m++) {
                  for (let s = m+1; s < 20 ;s++) {

                        zip(
                          this.sourceOne,
                          this.sourceTwo.pipe(skip(i)),
                          this.surceThree.pipe(skip(j)),
                          this.sourceFour.pipe(skip(k)),
                          this.sourceFour.pipe(skip(l)),
                          this.sourceFour.pipe(skip(m)),
                          this.sourceFour.pipe(skip(s))
                        )
                        
                          .subscribe(([val1, val2, val3, val4, val5, val6, val7] )=> {
                          this.tableWithRedendence.push([val1, val2, val3, val4, val5, val6, val7].toString());                        
                            
                        });
                  }
                }        


              }


             }
      }


      }
    }

 

    console.log("resultat1", this.tableWithRedendence);
 

    this.spliceRedendence();
    console.log('ssssssssssssssssssssssssssssssssssssssssss',this.form.value.choise)
   
}
private spliceRedendence() {

        of(this.tableWithRedendence).pipe(filter(data => {
          return  ((parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2])+  parseInt(data[3])) != 111  && (parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2])) != 10 );
        })).subscribe(rst => {
          this.tableWithoutRedendence.push(rst.toString())
          
     //   console.log("tableWithoutRedendence", this.tableWithoutRedendence);
  })


}
remouvefromAllJockeys(xnbr) {
  console.log("conhhhhhhhhhhhhhhhhhhhhhhhh", xnbr);
  let f =  xnbr 
  let wm = this.allJockeys[f];
  this.allJockeys.splice(f, 1);
  this.deletedJokeys.push(f)
 
  //this.deletedJockeys$.subscribe(data => console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',data));
  this.sourceOne = this.sourceOne.pipe(filter(num => num != wm))
  this.sourceTwo = this.sourceTwo.pipe(filter(num => num != wm))
  this.surceThree = this.surceThree.pipe(filter(num => num != wm))
  this.sourceFour = this.sourceFour.pipe(filter(num => num != wm))

  //}))
 //console.log("this.deletedthis.sourceOnethis.sourceOnethis.sourceOnethis.sourceOnethis.sourceOneJokeus", this.sourceOne);
 
   this.tableWithRedendence=[]
   this.startAction();
 
 
   
}
   
}
