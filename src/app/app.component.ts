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
  tableLessProbable$:Observable<number>;

   
  spotsTable: string[]= [];
  spotsTable$:Observable<{}>
  tableFavorites$:Observable<number[]>;
  tableFavorites: number[]=[];
  
  tableMediumProbable: number[]=[];
  tableMediumProbable$: Observable<number>;
  
  tableNumJockeyAndCotes:[[]]=[[]];
  tableNumJockeyAndCotes$: Observable<[[]]>;
  tableOfSumeitem: string[]=[];
  tableOfCotes: number[] = [];
  tableOfCotes$: Observable<number[]>;
  allJockeys: string[];
  allJockeys$: Observable<string[]>
  deletedJokeys:string[] = [];
  coteMoyenne: number =0;
  coteFavorite: number =1000;
  coteMoyenneTrancheInf =0;
  conserbedJockey: string;
  zipSubscription: Subscription;
  zipSpotsSubscription: Subscription;
  
 // deletedJockeys$:Observable<string[]>



  form = new FormGroup({
    choise: new FormControl('5'),
  });



  ngOnInit(): void {
 
  this.allJockeys = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'];


    this.allJockeys$ = of(this.allJockeys);
    this.tableOfCotes$ = of(this.tableOfCotes);
    this.tableFavorites$ = of(this.tableFavorites);
    this.tableLessProbable$ = from(this.tableLessProbable);
    this.tableMediumProbable$ = from(this.tableMediumProbable);
    this.tableNumJockeyAndCotes$ = of(this.tableNumJockeyAndCotes);

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
                           console.log('lllllllllllllllllll>>>' + this.tableWithRedendence) 
                        });
                  }
                }        


              }


             }
      }


      }
    }

 

    console.log("resultat1", this.tableWithRedendence);
 

     
  //  console.log('ssssssssssssssssssssssssssssssssssssssssss',this.form.value.choise)
   
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
  
   


   
}   
remouvefromAllJockeys(xnbr) {

  console.log("conhhhhhhhhhhhhhhhhhhhhhhhh", xnbr);
  let f =  xnbr 
  let wm = this.allJockeys[f];
  this.allJockeys.splice(f, 1);
  this.deletedJokeys.push(f)
  this.oteFromCote(wm);
 
   
  this.sourceOne = this.sourceOne.pipe(filter(num => num != wm))
 
    
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
 
 
  console.log("tableNewOfCotes ", this.tableOfCotes);
  this.tableOfCotes$.subscribe(data => {   for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      console.log("+++++++++++++++++++>Cotes ",key);
    }
  // } i=1; i<data.length; 
     if(data[key]!=0 && data[key]!=NaN) {
       
      
      console.log("+++++++++++++++++++> data[key] ",data[key]);
      
       if(data[key] > this.coteMoyenne ) {
       

  // console.log("+++++++++++++++++++>Cotes ");
         this.tableLessProbable.push(parseInt(key));
       } else if (data[key]<this.coteMoyenneTrancheInf ) {
         this.tableFavorites.push(parseInt(key));
       } else { this.tableMediumProbable.push(parseInt(key))}

    }
          
   
  }
  
  })
  console.log("tableLessProbable++++++tableLessProbable ", this.tableLessProbable);
  console.log("this.tableMediumProbable ", this.tableMediumProbable);
  console.log("tableFavorites ", this.tableFavorites);
}

spots() {
  console.log("dans le spots++++++tableLessProbable ", this.tableLessProbable);
  console.log("dans le spots++++ ", this.tableMediumProbable);
  console.log("tableFavorites ", this.tableFavorites);
 for (let i=0; i<5; i++) {
  this.tableFavorites$ = of(this.tableFavorites);
  this.tableMediumProbable$ = from(this.tableMediumProbable);
  this.tableLessProbable$ = from(this.tableLessProbable);
 
 
 const zipSpotsSubscriptionn = 
//   zip(
    this.tableFavorites$.pipe(
      withLatestFrom(this.tableMediumProbable$.pipe(take(2))
                 .pipe(withLatestFrom(this.tableLessProbable$.pipe(skip(i))))))

    // this.tableMediumProbable$.pipe(take(2)),
    // this.tableLessProbable$.pipe(take(1)),
   
   

  
// )
 .subscribe(([val1, val2] )=> {
  this.spotsTable.push([val1, val2].toString());     

 
//  .pipe(
//    map(([first, second, thitd]) => {
//     console.log("first, second, thitd ", first, second, thitd);
//     console.log("this.tableFavorites ", this.tableFavorites);
 
     console.log("this.spotsTable===> ", this.spotsTable);


     this.spotsTable.forEach(el => console.log('el==>')+el);

   })
  }

}

ngOnDestroy(): void {
  this.zipSubscription.unsubscribe;
  this.zipSpotsSubscription.unsubscribe;
  
}

}
