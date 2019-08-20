import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {FormControl, FormGroup} from '@angular/forms';
import { forkJoin, zip, combineLatest, Subject, BehaviorSubject, from, Subscription } from 'rxjs';
import {of, Observable,range} from 'rxjs';
import { delay, skip, filter, tap, distinctUntilChanged, map, withLatestFrom, take, first, merge  } from 'rxjs/operators';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  
sourceOne =   of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18');
 


 
  tableWithRedendence: string[] =[];
  tableWithoutRedendence: string[] =[];
  tableLessProbable: number[]=[];
  tableLessProbable$: Observable<number[]>;
  tableFavorites: number[]=[];
  tableFavorites$: Observable<number[]>;
  tableMediumProbable: number[]=[];
  tableMediumProbable$: Observable<number[]>;
  
  tableNumJockeyAndCotes:[[]]=[[]];
  tableNumJockeyAndCotes$: Observable<[[]]>;
  tableOfSumeitem: string[]=[];
  tableOfCotes: number[] = [];
  tableOfCotes$: Observable<number[]>;
  allJockeys: string[];
  allJockeys$: Observable<string[]>
  deletedJokeys:string[] = [];
  coteMoyenne: number =0;
  coteFavorite: number =500;
  coteMoyenneTrancheInf =0;
  conserbedJockey: string;
  zipSubscription: Subscription;
  
 // deletedJockeys$:Observable<string[]>



  form = new FormGroup({
    choise: new FormControl('5'),
  });



  ngOnInit(): void {
 
  this.allJockeys = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'];


    this.allJockeys$ = of(this.allJockeys);
    this.tableOfCotes$ = of(this.tableOfCotes);

  //  this.deletedJockeys$ = new BehaviorSubject(this.deletedJokeys);
 
    this.startAction();
 
}


startAction() {
 // this.sourceOne.split(",")
 this.tableWithRedendence=[];
  for (let i = 1; i < 19 ;i++) {
     
    for (let j = i+1; j < 19 ;j++) {


        if (this.form.value.choise == 3) {

            this.zipSubscription  =  zip(
                    this.sourceOne,
                    this.sourceOne.pipe(skip(i)),
                    this.sourceOne.pipe(skip(j)),
                    
                  )
                  
                    .subscribe(([val1, val2, val3] )=> {
                    this.tableWithRedendence.push([val1, val2, val3].toString());                        
                      
                  });

           }

       for (let k = j+1; k < 19 ;k++) {

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
                   for (let l = k+1; l < 19 ;l++) {
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
              for (let l = k+1; l < 19 ;l++) {
                for (let m = l+1; m < 19 ;m++) {
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
              for (let l = k+1; l < 19 ;l++) {
                for (let m = l+1; m < 19 ;m++) {
                  for (let s = m+1; s < 19 ;s++) {

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
        console.log('this.coteFavorite', this.coteFavorite)
        this.coteMoyenne= this.coteMoyenne+c;
        console.log('cccccccccc', c)
        console.log('cpt ', cpt)
        if(this.coteFavorite>c) { this.coteFavorite = c }
        
      } 
 
  })
  this.coteMoyenne = this.coteMoyenne/cpt;
  this.coteMoyenneTrancheInf = (this.coteMoyenne + this.coteFavorite) / 2;
  console.log("this.coteMoyenne", this.coteMoyenne);
  console.log("this.coteFavorite", this.coteFavorite);
  console.log("this.coteMoyenneTrancheInf", this.coteMoyenneTrancheInf);
  
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





//   var a = [{name:"bull", text: "sour"},
//   { name: "tom", text: "tasty" },
//   { name: "tom", text: "tasty" }
// ]
// var index = a.findIndex(x => x.name=="bob")
// // here you can check specific property for an object whether it exist in your array or not

// if (index === -1){
//   a.push({your_object});
// }
// else console.log("object already exists")

  console.log("conhhhhhhhhhddddddddddddwwwwwwwwwwwwhhhhhhhhhhhhhhh", val);
      this.tableOfCotes[parseFloat(val[0])] =parseFloat(val[1]);
       this.conserbedJockey = val;
      this.computeCoteMoyenne(this.conserbedJockey);
      this.updateInprobableAndFavorite();
      let index =this.tableNumJockeyAndCotes.findIndex(x => x==val);
      if (index === -1) {
        this.tableNumJockeyAndCotes.push(val)
      }
       
      console.log("this.tableNumJockeyAndCotes", this.tableNumJockeyAndCotes);


}
oteFromCote(index){
 
  this.tableOfCotes[parseFloat(index)]=0;
  this.computeCoteMoyenne(index);
  this.updateInprobableAndFavorite();
 
}



updateInprobableAndFavorite() {

  this.tableLessProbable=[];
  this.tableMediumProbable=[];
  this.tableFavorites=[];
  let elmtRef =0;
 
  console.log("tableNewOfCotes ", this.tableOfCotes);
  this.tableOfCotes$.subscribe(data => { data.forEach(elmt => {
    if(elmt!=0) {
      if(elmt > this.coteMoyenne ) {
        this.tableLessProbable.push(elmt);
      } else if ( elmt<this.coteMoyenneTrancheInf ) {
        this.tableFavorites.push(elmt);
      } else { this.tableMediumProbable.push(elmt)}

    }
          
   
  })
  
  })
  console.log("tableLessProbable++++++tableLessProbable ", this.tableLessProbable);
  console.log("this.tableMediumProbable ", this.tableMediumProbable);
  console.log("tableFavorites ", this.tableFavorites);
}

ngOnDestroy(): void {
  this.zipSubscription.unsubscribe;
  
}

}
