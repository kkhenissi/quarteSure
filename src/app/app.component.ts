import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {FormControl, FormGroup} from '@angular/forms';
import { forkJoin, zip, combineLatest, Subject, BehaviorSubject, from } from 'rxjs';
import {of, Observable,range} from 'rxjs';
import { delay, skip, filter, tap, distinctUntilChanged, map, withLatestFrom, take, first, merge  } from 'rxjs/operators';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
sourceOne =   of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
 


 
  tableWithRedendence: string[] =[];
  tableWithoutRedendence: string[] =[];
  tableLessProbable: number[]=[];
  tableLessProbable$: Observable<number[]>;
  tableOfSumeitem: string[]=[];
  tableOfCotes: number[] = [];
  tableOfCotes$: Observable<number[]>;
  allJockeys: string[];
  allJockeys$: Observable<string[]>
  deletedJokeys:string[] = [];
  coteMoyenne: number =0;
  conserbedJockey: string;
 // deletedJockeys$:Observable<string[]>



  form = new FormGroup({
    choise: new FormControl('5'),
  });



  ngOnInit(): void {
 
  this.allJockeys = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16'];


    this.allJockeys$ = of(this.allJockeys);
    this.tableOfCotes$ = of(this.tableOfCotes);

  //  this.deletedJockeys$ = new BehaviorSubject(this.deletedJokeys);
 
    this.startAction();
 
}


startAction() {
 // this.sourceOne.split(",")
 this.tableWithRedendence=[];
  for (let i = 1; i < 17 ;i++) {
     
    for (let j = i+1; j < 17 ;j++) {


        if (this.form.value.choise == 3) {

                  zip(
                    this.sourceOne,
                    this.sourceOne.pipe(skip(i)),
                    this.sourceOne.pipe(skip(j)),
                    
                  )
                  
                    .subscribe(([val1, val2, val3] )=> {
                    this.tableWithRedendence.push([val1, val2, val3].toString());                        
                      
                  });

           }

       for (let k = j+1; k < 17 ;k++) {

          if (this.form.value.choise == 4) {
            
                      zip(
                          this.sourceOne,
                          this.sourceOne.pipe(skip(i)),
                          this.sourceOne.pipe(skip(j)),
                          this.sourceOne.pipe(skip(k))
                        )
                        
                           .subscribe(([val1, val2, val3, val4] )=> {
                           this.tableWithRedendence.push([val1, val2, val3, val4].toString());                        
                            
                        });
             } else if (this.form.value.choise == 5) {
                   for (let l = k+1; l < 17 ;l++) {
                        zip(
                          this.sourceOne,
                          this.sourceOne.pipe(skip(i)),
                          this.sourceOne.pipe(skip(j)),
                          this.sourceOne.pipe(skip(k)),
                          this.sourceOne.pipe(skip(l))
                        )
                        
                          .subscribe(([val1, val2, val3, val4, val5] )=> {
                          this.tableWithRedendence.push([val1, val2, val3, val4, val5].toString());                        
                            
                        });
                    }          

             } else if(this.form.value.choise == 6) {
              for (let l = k+1; l < 17 ;l++) {
                for (let m = l+1; m < 17 ;m++) {
                        zip(
                          this.sourceOne,
                          this.sourceOne.pipe(skip(i)),
                          this.sourceOne.pipe(skip(j)),
                          this.sourceOne.pipe(skip(k)),
                          this.sourceOne.pipe(skip(l)),
                          this.sourceOne.pipe(skip(m))
                        )                        
                          .subscribe(([val1, val2, val3, val4, val5, val6] )=> {
                          this.tableWithRedendence.push([val1, val2, val3, val4, val5, val6].toString());                        
                            
                        });
                 }        


              }


             } else if(this.form.value.choise == 7) {
              for (let l = k+1; l < 17 ;l++) {
                for (let m = l+1; m < 17 ;m++) {
                  for (let s = m+1; s < 17 ;s++) {

                        zip(
                          this.sourceOne,
                          this.sourceOne.pipe(skip(i)),
                          this.sourceOne.pipe(skip(j)),
                          this.sourceOne.pipe(skip(k)),
                          this.sourceOne.pipe(skip(l)),
                          this.sourceOne.pipe(skip(m)),
                          this.sourceOne.pipe(skip(s))
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
 

    this.spliceInprobable();
  //  console.log('ssssssssssssssssssssssssssssssssssssssssss',this.form.value.choise)
   
}
private spliceInprobable() {

  //       of(this.tableWithRedendence)
          
  //       .subscribe(data => { 
 
  //         if (this.tableOfCotes[1] > this.coteMoyenne) 
  //           this.tableWithRedendence=data;
          
  //       console.log("tableWithRedendence", this.tableWithRedendence);
  // })


}
computeCoteMoyenne(concernedJockey) {
  let cpt=0;
  this.coteMoyenne=0;
   this.tableOfCotes.forEach(c=>{
    console.log('===========================>  c ', c)
      if(c!=0 && c!=NaN)  {
        cpt = cpt+1;
        console.log('this.coteMoyenne avant', this.coteMoyenne)
        this.coteMoyenne= this.coteMoyenne+c;
        console.log('this.coteMoyenne apres', this.coteMoyenne)
        console.log('cpt ', cpt)
        
      } 
 
  })
  this.coteMoyenne = this.coteMoyenne/cpt;
  
  // if(concernedJockey[1]>this.coteMoyenne && this.tableLessProbable.indexOf(concernedJockey[0]) == -1) {
  //   this.tableLessProbable.push(concernedJockey[0])
  // }
  
   
  this.spliceInprobable();
}   
remouvefromAllJockeys(xnbr) {

  console.log("conhhhhhhhhhhhhhhhhhhhhhhhh", xnbr);
  let f =  xnbr 
  let wm = this.allJockeys[f];
  this.allJockeys.splice(f, 1);
  this.deletedJokeys.push(f)
  this.oteFromCote(wm);
 
   
  this.sourceOne = this.sourceOne.pipe(filter(num => num != wm))
 
   this.tableWithRedendence=[]
   this.startAction();
  
}

addInCotes(val) {
  console.log("conhhhhhhhhhddddddddddddwwwwwwwwwwwwhhhhhhhhhhhhhhh", val);
      this.tableOfCotes[parseInt(val[0])] =parseInt(val[1]);
       this.conserbedJockey = val;
      this.computeCoteMoyenne(this.conserbedJockey);
      this.updateInprobable();


}
oteFromCote(index){
 
  this.tableOfCotes[parseInt(index)]=0;
  this.computeCoteMoyenne(index);
  this.updateInprobable();
 
}



updateInprobable() {

  this.tableLessProbable=[];
 
  console.log("tableNewOfCotes ", this.tableOfCotes);
  this.tableOfCotes$.subscribe(data => { data.forEach(elmt => {
   console.log('elmtelmtelmtelmtelmt',elmt)
   console.log('this.coteMoyenne---this.coteMoyenne',this.coteMoyenne)
    if(elmt > this.coteMoyenne)
    this.tableLessProbable.push(elmt);
    console.log('ssssssssss',this.tableLessProbable)
  })
    
    
  })
}

}
