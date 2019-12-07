import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {FormControl, FormGroup} from '@angular/forms';
import { forkJoin, zip, combineLatest, Subject, BehaviorSubject, from, Subscription } from 'rxjs';
import {of, Observable, range} from 'rxjs';
import { delay, skip, filter, tap, distinctUntilChanged, map, withLatestFrom, take, first, merge  } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


sourceOne =   of('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18');




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

  tableNumJockeyAndCotes: [[]] = [[]];
  tableNumJockeyAndCotes$: Observable<[[]]>;
  tableOfSumeitem: string[] = [];
  tableOfCotes: number[] = [];
  tableOfCotes$: Observable<number[]>;
  allJockeys: string[];
  allJockeys$: Observable<string[]>;
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

  this.allJockeys = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];


  this.allJockeys$ = of(this.allJockeys);
  this.tableOfCotes$ = of(this.tableOfCotes);
  this.tableFavorites$ = of(this.tableFavorites);
  this.tableLessProbable$ = from(this.tableLessProbable);
  this.tableMediumProbable$ = from(this.tableMediumProbable);
  this.tableNumJockeyAndCotes$ = of(this.tableNumJockeyAndCotes);



  this.startAction();

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

//              } else if (this.form.value.choise === 6) {
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


//              } else if (this.form.value.choise === 7) {
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





}
removefromAllJockeys(xnbr) {

  console.log('conhhhhhhhhhhhhhhhhhhhhhhhh', xnbr);
  const f =  xnbr;
  const wm = this.allJockeys[f];
  this.allJockeys.splice(f, 1);
  this.deletedJokeys.push(f);
  this.oteFromCote(wm);


  this.sourceOne = this.sourceOne.pipe(filter(num => num !== wm));


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

  console.log('conhhhhhhhhhddddddddddddwwwwwwwwwwwwhhhhhhhhhhhhhhh', val);
  this.tableOfCotes[parseFloat(val[0])] = parseFloat(val[1]);
  this.conserbedJockey = val;
  this.computeCoteMoyenne(this.conserbedJockey);
  this.updateInprobableAndFavorite();
  let index = this.tableNumJockeyAndCotes.findIndex(x => x == val);
  if (index === -1) {
        this.tableNumJockeyAndCotes.push(val);
      }



}
oteFromCote(index) {

  this.tableOfCotes[parseFloat(index)] = 0;
  this.computeCoteMoyenne(index);
  this.updateInprobableAndFavorite();

}



updateInprobableAndFavorite() {

  this.tableLessProbable = [];
  this.tableMediumProbable = [];
  this.tableFavorites = [];


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
}

spots() {
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
  if (this.form.value.choise === 6) {  // when we choose multi in 6
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



}

ngOnDestroy(): void {
  this.zipSubscription.unsubscribe;
  this.zipSpotsSubscription.unsubscribe;
}

}
