import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { forkJoin, zip, combineLatest, Subject } from 'rxjs';
import {of, Observable,range} from 'rxjs';
import { delay, skip, filter, tap, distinctUntilChanged, map, withLatestFrom, take, first  } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  //  sourceOne =   of('1','2','3','4','5','6','7','8','9','10','11','12');,

//   import { range } from 'rxjs';
// import { map, filter } from 'rxjs/operators';



  sourceOne =   ['1','2','3','4','5','6','7','8','9','10','11','12'].toString().split(",");
  sourceTwo =   ['1','2','3','4','5','6','7','8','9','10','11','12'].toString().split(",");;
  sourceThree = ['1','2','3','4','5','6','7','8','9','10','11','12'].toString().split(",");;
  sourceFour =  ['1','2','3','4','5','6','7','8','9','10','11','12'].toString().split(",");;
  sourceOne$:Observable<string[]>
  sourceTwo$:Observable<string[]>
  sourceThree$:Observable<string[]>
  sourceFour$:Observable<string[]>
  tableWithRedendence: string[] =[];
  tableWithoutRedendence: string[] =[];
  tableOfSumeitem: string[]=[];
  allJockeys: string[];
  allJockeys$: Observable<string[]>

  ngOnInit(): void {

    // range(1, 200).pipe(
    //   filter(x => x % 2 === 1),
    //   map(x => x + x)
    // ).subscribe(x => console.log('==============================>',x));





  this.allJockeys = ['1','2','3','4','5','6','7','8','9','10','11','12'];

    this.allJockeys$ = of(this.allJockeys);
    this.sourceOne$ = of(this.sourceOne)
    this.sourceTwo$ = of(this.sourceTwo)
    this.sourceThree$ = of(this.sourceThree)
    this.sourceFour$ = of(this.sourceFour)
    this.startAction();
    
      

  
}


startAction() {

  for (let i = 1; i < 8 ;i++) {
    for (let j = i+1; j < 8 ;j++) {
       for (let k = j+1; k < 9 ;k++) {
  
      let contCalc:number = 0;
                      zip(
                            of((this.sourceOne).toString().split(",")), 
                            of((this.sourceTwo).toString().split(",")), 
                            of((this.sourceThree).toString().split(",")), 
                            of((this.sourceFour).toString().split(",")), 
                        )
                        
                           .subscribe(([val1, val2, val3, val4] )=> {
                           this.tableWithRedendence.push([val1, val2, val3, val4].toString());
                           
                             
                            
                        });
                        }
      }
    }


    // .pipe(filter(data => data[1] !== data[1] && data[1] !== data[2]    &&  data[1] !== data[2] &&  data[2] !== data[3] )).pipe(
    //   tap(val => {contCalc =  
    //   this.tableOfSumeitem.push(contCalc.toString());
    //   })
    // )




    console.log("resultat1", this.tableWithRedendence);
  //  console.log("contCalc", this.tableOfSumeitem);

    this.spliceRedendence();
   
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
  let f = xnbr -1
  this.allJockeys.splice(xnbr, 1);
 // this.allJockeys = [1,2,3,4,5,6,7,8,9,10,11];

  this.sourceOne$ =   this.allJockeys$ 
  console.log("this.sourceOne[0]", this.sourceOne[0]);
   
  // this.sourceOne = this.sourceOne[0].value;
   this.sourceTwo = this.sourceOne; 
   this.sourceThree = this.sourceOne; 
   this.sourceFour = this.sourceOne; 
   console.log("this.sourceOne", this.sourceOne);
   console.log("this.sourceTwo", this.sourceTwo);
   // of('1','3','5','7','9','10','11');
  // this.sourceThree = of('1','3','5','7','9','10','11');
  // this.sourceFour =  of('1','3','5','7','9','10','11');
   this.allJockeys$ = of(this.allJockeys);
   this.sourceOne$ = of(this.sourceOne)
   this.tableWithRedendence=[]
   this.startAction();
 // setTimeout(()=>{
    console.log("cssssssssssssssssssssssssssssssssss", this.allJockeys);
     console.log("iiiiiiiiii")
 // },3000)
  
  



  
   
}
   
}
