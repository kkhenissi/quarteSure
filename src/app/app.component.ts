import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { from, Observable, of, Subscription } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { RefCourse } from './models/ref-course.model';
import { GetAllNextCourseActions, NextCourseActionsTypes } from './ngrx/next-course.actions';
import { NextCoursesState } from './ngrx/next-courses.reducers';
import { DellSelectedParticipantActions, ParticipantActionsTypes } from './ngrx/participant.actions';
import { participantsSelector, ParticipantsState } from './ngrx/participant.reducers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private store: Store<any>,
              private cdRef:ChangeDetectorRef) {}

participantsState$: Observable<ParticipantsState> | null = null;
nextCoursesState$: Observable<NextCoursesState> | null = null;
refNextCourse: RefCourse={R:'',C:''};
//
nextCourses:string[]=[];
nextCourses$=of(this.nextCourses);


 /// ** sourceOne =   of('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18');




  tableWithRedendence: string[] = [];
  tableWithoutRedendence: string[] = [];
  tableLessProbable: string[] = [];
  tableLessProbable$: Observable<string>;


  spotsTable: string[] = [];
  spotsTable$: Observable<{}>;
  tableFavorites$: Observable<string[]>;
  tableFavorites: string[] = [];

  tableMediumProbable: string[] = [];
  tableMediumProbable$: Observable<string>;

  tableNumJockeyAndCotes: [string[]] = [[]];
  iaTableResult: string[] = [];
  iaTableResult$: Observable<string[]>;
  tableNumJockeyAndCotes$: Observable<[string[]]>;
  tableOfSumeitem: string[] = [];
  tableOfCotes: number[] = [];
  tableOfCotes$: Observable<number[]>;
  allJockeys: any[];
  allJockeys$: Observable<any[]>;
  deletedJokeys: string[] = [];
  coteMoyenne = 0;
  coteFavorite = 1000;
  coteMoyenneTrancheInf = 0;
  conserbedJockey: string;
  zipSubscription: Subscription;
  zipSpotsSubscription: Subscription;





  form = new FormGroup({
    choise: new FormControl('5'),
  });



  ngOnInit(): void {

  this.store.dispatch(new GetAllNextCourseActions(NextCourseActionsTypes.GET_ALL_NEXTCOURSES));
  this.startAction();
  this.cdRef.detectChanges();
  this.nextCoursesState$=this.store.pipe(     // charge les course dont le departs soit imenant
    map((state) =>state.nextCoursesState)
  );

   this.store.select(participantsSelector).subscribe((data) => {

     this.allJockeys=Object.assign([], data['participants'])
     console.log('participants from allJockeys ===>',  this.allJockeys)
   })
  // this.allJockeys = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

  setTimeout(()=> {
    // this.participantsState$.subscribe((data) => {
      this.nextCoursesState$.subscribe((data) => {
        if(this.nextCourses.length==0) {
          data.courses.forEach(cr => {
            console.log('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{==>>', cr['numOfficiel'])
             this.refNextCourse.R=cr['numOfficiel'];
             this.refNextCourse.C=cr['numOrdre'];
             console.log('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{==>>', this.refNextCourse)
             this.nextCourses.push('R'+cr['numOfficiel']+'C'+cr['numOrdre'])

          });

  }

  //  this.nextCourse=data;
      console.log('ssssssswhat is in this.nextCourses =======>',this.nextCourses)
      console.log('ssssssswhat is in  this.allJockeys =======>', this.allJockeys)
                           this.allJockeys$ = of(this.allJockeys);
                           this.tableOfCotes$ = of(this.tableOfCotes);
                           this.tableFavorites$ = of(this.tableFavorites);
                           this.tableLessProbable$ = from(this.tableLessProbable);
                           this.tableMediumProbable$ = from(this.tableMediumProbable);
                          this.tableNumJockeyAndCotes$ = of(this.tableNumJockeyAndCotes);
      })
  }, 1500)



  // this.participantService.getParticipants().subscribe(data=>{
  //   console.log('sssssssssssssss==>',data)
  // }, err => {
  //   console.log('errr===>',err)
  // })
}



startAction() {

 this.tableWithRedendence = [];
//  for (let i = 1; i < 19 ; i++) {

//     for (let j = i + 1; j < 19 ; j++) {


//         if (this.form.value.choise == 3) {

//             this.zipSubscription  =  zip(
//                     this.sourceOne,
//                     this.sourceOne.pipe(skip(i)),
//                     this.sourceOne.pipe(skip(j)),

//                   )

//                     .subscribe(([val1, val2, val3] ) => {
//                     this.tableWithRedendence.push([val1, val2, val3].toString());

//                   });

//            }

//         for (let k = j + 1; k < 19 ; k++) {

//           if (this.form.value.choise == 4) {

//                       zip(
//                           this.sourceOne,
//                           this.sourceOne.pipe(skip(i)),
//                           this.sourceOne.pipe(skip(j)),
//                           this.sourceOne.pipe(skip(k))
//                         )

//                            .subscribe(([val1, val2, val3, val4] ) => {
//                            this.tableWithRedendence.push([val1, val2, val3, val4].toString());

//                         });
//              } else if (this.form.value.choise == 5) {
//                    for (let l = k + 1; l < 19 ; l++) {
//                         zip(
//                           this.sourceOne,
//                           this.sourceOne.pipe(skip(i)),
//                           this.sourceOne.pipe(skip(j)),
//                           this.sourceOne.pipe(skip(k)),
//                           this.sourceOne.pipe(skip(l))
//                         )

//                           .subscribe(([val1, val2, val3, val4, val5] ) => {
//                           this.tableWithRedendence.push([val1, val2, val3, val4, val5].toString());

//                         });
//                     }

//              } else if (this.form.value.choise == 6) {
//               for (let l = k + 1; l < 19 ; l++) {
//                 for (let m = l + 1; m < 19 ; m++) {
//                         zip(
//                           this.sourceOne,
//                           this.sourceOne.pipe(skip(i)),
//                           this.sourceOne.pipe(skip(j)),
//                           this.sourceOne.pipe(skip(k)),
//                           this.sourceOne.pipe(skip(l)),
//                           this.sourceOne.pipe(skip(m))
//                         )
//                           .subscribe(([val1, val2, val3, val4, val5, val6] ) => {
//                           this.tableWithRedendence.push([val1, val2, val3, val4, val5, val6].toString());

//                         });
//                  }


//               }


//              } else if (this.form.value.choise == 7) {
//               for (let l = k + 1; l < 19 ; l++) {
//                 for (let m = l + 1; m < 19 ; m++) {
//                   for (let s = m + 1; s < 19 ; s++) {

//                         zip(
//                           this.sourceOne,
//                           this.sourceOne.pipe(skip(i)),
//                           this.sourceOne.pipe(skip(j)),
//                           this.sourceOne.pipe(skip(k)),
//                           this.sourceOne.pipe(skip(l)),
//                           this.sourceOne.pipe(skip(m)),
//                           this.sourceOne.pipe(skip(s))
//                         )

//                           .subscribe(([val1, val2, val3, val4, val5, val6, val7] ) => {
//                           this.tableWithRedendence.push([val1, val2, val3, val4, val5, val6, val7].toString());
//                           console.log('lllllllllllllllllll>>>' + this.tableWithRedendence);
//                         });
//                   }
//                 }


//               }


//              }
//       }


//       }
//     }



 console.log('resultat1', this.tableWithRedendence);



  //  console.log('ssssssssssssssssssssssssssssssssssssssssss',this.form.value.choise)

}

// participantsJokey(event) {


// this.allJockeys=event;
//   console.log('hhhhhhhhhhhhhhh==>',this.allJockeys)
//   // this.cdRef.detectChanges();

//   this.allJockeys$=of(this.allJockeys)



// }


computeCoteMoyenne(concernedJockey) {
  let cpt = 0;
  this.coteMoyenne = 0;

  this.tableOfCotes.forEach(c => {
    console.log('===========================>  c ', c);
    if (c != 0 && c != NaN)  {
        cpt = cpt + 1;
        console.log('this.coteFavorite', this.coteFavorite);
        this.coteMoyenne = this.coteMoyenne + c;
        console.log('cccccccccc', c);
        console.log('cpt ', cpt);
        if (this.coteFavorite > c) { this.coteFavorite = c; }

      }

  });
  this.coteMoyenne = this.coteMoyenne / cpt;
  this.coteMoyenneTrancheInf = (this.coteMoyenne + this.coteFavorite) / 2;
  console.log('this.coteMoyenne', this.coteMoyenne);
  console.log('this.coteFavorite', this.coteFavorite);
  console.log('this.coteMoyenneTrancheInf', this.coteMoyenneTrancheInf);

  // if(concernedJockey[1]>this.coteMoyenne && this.tableLessProbable.indexOf(concernedJockey[0]) == -1) {
  //   this.tableLessProbable.push(concernedJockey[0])
  // }

  this.updateNumJockeyAndCotes(concernedJockey)



}
removefromAllJockeys(xnbr) {
 //

  console.log('conhhhhhhhhhhhOOOOOOOOOOOOOOOOOOOOOOOO/////////////////////////////hhhhhhhhhhhhh', xnbr);
  console.log('conhhhhhhhhhhhhhhhhhhhhhhhh', this.allJockeys);

  const f =  xnbr;
  let wm = this.allJockeys[f];
  console.log('conhhhhhhhhhhhhhhhhhhhhhhhh  wm==>', wm);
  const wmNum = wm['numPmu'].toString();
  this.allJockeys.splice(f, 1);
  this.store.dispatch(new DellSelectedParticipantActions(ParticipantActionsTypes.DELL_SELECTED_PARTICIPANT));
  console.log('afterslice ===>', this.allJockeys);
  this.deletedJokeys.push(f);
 // **
  this.oteFromCote(wmNum);


  // this.sourceOne = this.sourceOne.pipe(filter(num => num !== wmNum));


 // this.startAction();

}

addInCotes(val) {
console.log('§*******************************!!!!!!!!!!!!!!!!!!!!§§§§§§§§§§§§§§§§§§§§§§§§§§§§')

  this.tableNumJockeyAndCotes.findIndex(x => console.log(' OOOOOOOOOOOOOOOOooXXXXXXXX====>',x[0]))
  console.log('conhhhhhhhhhddddddddddddwwwwwwwwwwwwhhhhhhhhhhhhhhh', val[0]);
  this.tableOfCotes[parseFloat(val[0])] = parseFloat(val[1]);
  this.conserbedJockey = val;
  this.computeCoteMoyenne(this.conserbedJockey);
  this.updateInprobableAndFavorite();
  let index = this.tableNumJockeyAndCotes.findIndex(x => x[0] == val[0]);
  console.log('What is in index ====>', index);
  if (index === -1) {
       this.tableNumJockeyAndCotes.push(val);
  }

  //    cars.sort(function(a, b){return a.year - b.year});

  this.tableNumJockeyAndCotes.sort(function(a:any,b:any){return a[1] - b[1]})
  console.log('numJockehouuuuuuuuuuuuuuuuuuuuurraysAndCotes ====>', this.tableNumJockeyAndCotes)
  this.ia();

}
oteFromCote(index) {

  this.tableOfCotes[parseFloat(index)] = 0;
  this.computeCoteMoyenne(index);
  this.updateInprobableAndFavorite();

}


updateNumJockeyAndCotes(concernedJockey) {
  console.log('concernedJockey------------------------------------------>',concernedJockey)
  console.log('tableNumJockeyAndCotes------------------------------------------>',this.tableNumJockeyAndCotes)
 //  this.tableNumJockeyAndCotes.filter(data => {
     for (const key in  this.tableNumJockeyAndCotes) {

        if(this.tableNumJockeyAndCotes[key][0]==concernedJockey[0]) {
         this.tableNumJockeyAndCotes[key][1]=concernedJockey[1];
        }
      console.log('Keeeeeeeeeeyyyyyyyyyyyyyyyyyyyyyyyyy==>', this.conserbedJockey[0])
       console.log('Keeeeeeeeeeyyyyyyyyyyyyyyyyyyyyyyyyy==>', this.tableNumJockeyAndCotes[key][0])
     }
 //  })
   const index = this.tableNumJockeyAndCotes.indexOf(concernedJockey[0])
   console.log('index of concernedJockey------------------------------------------>',index)
}
updateInprobableAndFavorite() {

  this.tableLessProbable = [];
  this.tableMediumProbable = [];
  this.tableFavorites = [];

  // this.tableNumJockeyAndCotes$.subscribe(data => {
  //   for (const key in data) {
  //     const element = data[key];
  //     console.log('666666666666666666666666666666666666666666==>',element);
  //   }
  // })



  console.log('tableNewOfCotes****************************> ', this.tableOfCotes);
  // tslint:disable-next-line: forin
  this.tableOfCotes$.subscribe(data => {   for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      console.log('+++++++++++++++++++>Cotes ', ('0' + key).slice(-2));
    }

    if (data[key] != 0 && data[key] != NaN) {


      console.log('+++++++++++++++++++> data[key] ', data[key]);

      if (data[key] > this.coteMoyenne ) {
         this.tableLessProbable.push(('0' + key).slice(-2));
       } else if (data[key] < this.coteMoyenneTrancheInf ) {
         this.tableFavorites.push(('0' + key).slice(-2));
       } else { this.tableMediumProbable.push(('0' + key).slice(-2));}

    }


  }

 });
  console.log('tableLessProbable++++++tableLessProbable ', this.tableLessProbable);
  console.log('this.tableMediumProbable ', this.tableMediumProbable);
  console.log('tableFavorites ', this.tableFavorites);
  console.log('this.tableNumJockeyAndCotes ', this.tableNumJockeyAndCotes);
}

spots() {
  this.spotsTable=[];

  const varForFavorite = this.tableFavorites.length;
  const varForMedium = this.tableMediumProbable.length;
  const varForLess = this.tableLessProbable.length;
  let varJ = 0;
  let varI = 0;
  console.log('dans le spots++++++tableLessProbable ', this.tableLessProbable);
  console.log('dans le spots++++ ', this.tableMediumProbable);
  console.log('tableFavorites ', this.tableFavorites);

  this.tableFavorites$ = of(this.tableFavorites);
  this.tableMediumProbable$ = from(this.tableMediumProbable);
  this.tableLessProbable$ = from(this.tableLessProbable);



  // switch(this.form.value.choise) {
  //   case '6':

  //      switch(varForFavorite) {
  //        case '3':

  //      }

  // }




  if (this.form.value.choise == 6) {  // when we choose multi in 6

      if (varForFavorite === 3) { // when number of favories jockey equals 3

        for (let j = 0; j <= varForMedium;) {
        if (j === varForMedium) { varJ = 2; }
        for (let i = 0; i <= varForLess;) {
              console.log('iiiiiiiiiiiiiiiiiiiii===> ' + 1);
              this.zipSpotsSubscription =

                this.tableFavorites$.pipe(
                  withLatestFrom(this.tableMediumProbable$.pipe(take(j - varJ))
                          .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(j + 1))))
                            .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i))))))


            .subscribe(([val1, val2] ) => {
              this.spotsTable.push([val1, val2].toString());
              this.spotsTable.forEach(el => console.log('el==>') + el);
              });
              i++;
              }
        j++;
      }


      } else {    // when number of favorites jockeys equals 4

        for (let j = 0; j <= varForMedium;) {

              for (let i = 0; i <= varForLess;) {
                  this.zipSpotsSubscription =
                  this.tableFavorites$.pipe(
                    withLatestFrom(this.tableMediumProbable$.pipe(take(j))
                              .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i))))))
                                    .subscribe(([val1, val2] ) => {
                                    this.spotsTable.push([val1, val2].toString());
                                    this.spotsTable.forEach(el => console.log('el==>') + el);
                                    });
                  i++;
              }
              j++;
        }

      }
    } else if (this.form.value.choise == 7) {  // when we choose multi in 7

      if (varForFavorite == 3) { // when number of favories jockey equals 3
        for (let j = 0; j <= varForMedium;) {
        if (j == varForMedium) { varJ=2; }
        for (let i = 0; i <= varForLess;) {
              if (i == varForLess) { varI=2; }
              console.log('iiiiiiiiiiiiiiiiiiiii===> ' + 1);
              this.zipSpotsSubscription =

                this.tableFavorites$.pipe(
                  withLatestFrom(this.tableMediumProbable$.pipe(take(j - varJ))
                          .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(j + 1))))
                            .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i - varI))))
                              .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(i + 1))))))


            .subscribe(([val1, val2] ) => {
              this.spotsTable.push([val1, val2].toString());
              this.spotsTable.forEach(el => console.log('el==>') + el);
              });
              i++;
              }
        j++;
        }


      } else {    // when number of favorites jockeys equals 4

        for (let j = 0; j <= varForMedium;) {
              if (j == varForMedium) { varJ=2; }
              for (let i = 0; i <= varForLess;) {
                  this.zipSpotsSubscription =
                  this.tableFavorites$.pipe(
                    withLatestFrom(this.tableMediumProbable$.pipe(take(j - varJ))
                    .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(j + 1))))
                      .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i))))))
                                    .subscribe(([val1, val2] ) => {
                                    this.spotsTable.push([val1, val2].toString());
                                    this.spotsTable.forEach(el => console.log('el==>') + el);
                                    });
                  i++;
            }
          j++;
        }

      }
  }

console.log('Ya quoi dans spotsTable  ==>',this.spotsTable)

}
ia() {
  this.iaTableResult=[];
    for(let i=1 ; i<this.tableNumJockeyAndCotes.length; i++) {
      console.log('ssssssssssss==>ooooooooo==>',this.tableNumJockeyAndCotes[i][0])
     if(i!=3 && i!=6 && i!=10 && i!=14 && i!=15 && i!=16 && i!=17 && i!=18) {
       this.iaTableResult.push(this.tableNumJockeyAndCotes[i][0])
     }
   }
}

ngOnDestroy(): void {
  this.zipSubscription.unsubscribe;
  this.zipSpotsSubscription.unsubscribe;
}

}
