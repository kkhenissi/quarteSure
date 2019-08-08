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
  
sourceOne =   of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
sourceTwo =   of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
surceThree =  of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
sourceFour =  of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
sourceFive =  of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
sourceSixe =  of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');
surceSeven =  of('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16');


 
  tableWithRedendence: string[] =[];
  tableWithoutRedendence: string[] =[];
  tableOfSumeitem: string[]=[];
  tableOfCotes: number[] = [];
  allJockeys: string[];
  allJockeys$: Observable<string[]>
  deletedJokeys:string[] = [];
  coteMoyenne: number =0;
 // deletedJockeys$:Observable<string[]>



  form = new FormGroup({
    choise: new FormControl('4'),
  });



  ngOnInit(): void {
 
  this.allJockeys = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16'];


    this.allJockeys$ = of(this.allJockeys);
  //  this.deletedJockeys$ = new BehaviorSubject(this.deletedJokeys);
 
    this.startAction();
 
}


startAction() {
 // this.sourceOne.split(",")
 this.tableWithRedendence=[];
  for (let i = 1; i < 17 ;i++) {
     
    for (let j = i+1; j < 17 ;j++) {

       for (let k = j+1; k < 17 ;k++) {
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
                   for (let l = k+1; l < 17 ;l++) {
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
              for (let l = k+1; l < 17 ;l++) {
                for (let m = l+1; m < 17 ;m++) {
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
              for (let l = k+1; l < 17 ;l++) {
                for (let m = l+1; m < 17 ;m++) {
                  for (let s = m+1; s < 17 ;s++) {

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
 

    this.spliceInprobable();
  //  console.log('ssssssssssssssssssssssssssssssssssssssssss',this.form.value.choise)
   
}
private spliceInprobable() {

        of(this.tableWithRedendence)
          
        .subscribe(data => { 
          console.log("this.tableOfCotes[data[0][0]]", this.tableOfCotes[data[0][0]]);
          console.log("data[0][0]", data[0][0]);
          if(this.tableOfCotes[data[0][0]] > this.coteMoyenne) 
          this.tableWithoutRedendence=data;
          
        console.log("tableWithoutRedendence", this.tableWithoutRedendence);
  })


}
computeCoteMoyenne() {
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
   //   this.coteMoyenne = this.coteMoyenne/cpt;
            
      
  })
  this.coteMoyenne = this.coteMoyenne/cpt;
 // if(cpt==0) cpt=1;
  console.log('sssssssssssssssssscote Moyenne', this.coteMoyenne)
}   
remouvefromAllJockeys(xnbr) {

  console.log("conhhhhhhhhhhhhhhhhhhhhhhhh", xnbr);
  let f =  xnbr 
  let wm = this.allJockeys[f];
  this.allJockeys.splice(f, 1);
  this.deletedJokeys.push(f)
  this.oteFromCote(wm);
 
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

addInCotes(val) {
      this.tableOfCotes[parseInt(val[0])] =parseInt(val[1]);
      this.computeCoteMoyenne();

}
oteFromCote(index){
 
  this.tableOfCotes[parseInt(index)]=0;
  this.computeCoteMoyenne();
 
}

}
