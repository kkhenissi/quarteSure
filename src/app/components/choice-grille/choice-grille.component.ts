import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoritesActionsTypes, GetAllFavoriteActions } from 'src/app/ngrx/favorites-array.actions';
import { favoritesSelector } from 'src/app/ngrx/favorites-array.reducers';

@Component({
  selector: 'app-choice-grille',
  templateUrl: './choice-grille.component.html',
  styleUrls: ['./choice-grille.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceGrilleComponent implements OnInit {

  constructor(
    private store: Store
  ) { }
  spotsTable: string[] = [];
  spotsTable$: Observable<{}>;
  tableFavorites$: Observable<string[]>;
  tableFavorites: string[] = [];
  items: string[]=['2','3','4','5','6','7'];
  toChoose:string='';
  form = new FormGroup({
    choise: new FormControl('5'),
  });

  ngOnInit(): void {
    this.store.dispatch(new GetAllFavoriteActions(FavoritesActionsTypes.GET_ALL_FAVORITES));
    this.store.select(favoritesSelector).subscribe((data) => {

      this.tableFavorites=Object.assign([], data['participants'])
      console.log('favorite from allJockeys ===>',  this.tableFavorites)
    })

//   let trio: TripletGrille<string,number> = new TripletGrille("Trio","R4C2",2);

//  if (this.form.value.choise == 6) {  // when we choose multi in 6

//   if (varForFavorite === 3) { // when number of favories jockey equals 3

//     for (let j = 0; j <= varForMedium;) {
//     if (j === varForMedium) { varJ = 2; }
//     for (let i = 0; i <= varForLess;) {
//           console.log('iiiiiiiiiiiiiiiiiiiii===> ' + 1);
//           this.zipSpotsSubscription =

//             this.tableFavorites$.pipe(
//               withLatestFrom(this.tableMediumProbable$.pipe(take(j - varJ))
//                       .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(j + 1))))
//                         .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i))))))


//         .subscribe(([val1, val2] ) => {
//           this.spotsTable.push([val1, val2].toString());
//           this.spotsTable.forEach(el => console.log('el==>') + el);
//           });
//           i++;
//           }
//     j++;
//   }


//   } else {    // when number of favorites jockeys equals 4

//     for (let j = 0; j <= varForMedium;) {

//           for (let i = 0; i <= varForLess;) {
//               this.zipSpotsSubscription =
//               this.tableFavorites$.pipe(
//                 withLatestFrom(this.tableMediumProbable$.pipe(take(j))
//                           .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i))))))
//                                 .subscribe(([val1, val2] ) => {
//                                 this.spotsTable.push([val1, val2].toString());
//                                 this.spotsTable.forEach(el => console.log('el==>') + el);
//                                 });
//               i++;
//           }
//           j++;
//     }

//   }
// } else if (this.form.value.choise == 7) {  // when we choose multi in 7

//   if (varForFavorite == 3) { // when number of favories jockey equals 3
//     for (let j = 0; j <= varForMedium;) {
//     if (j == varForMedium) { varJ=2; }
//     for (let i = 0; i <= varForLess;) {
//           if (i == varForLess) { varI=2; }
//           console.log('iiiiiiiiiiiiiiiiiiiii===> ' + 1);
//           this.zipSpotsSubscription =

//             this.tableFavorites$.pipe(
//               withLatestFrom(this.tableMediumProbable$.pipe(take(j - varJ))
//                       .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(j + 1))))
//                         .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i - varI))))
//                           .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(i + 1))))))


//         .subscribe(([val1, val2] ) => {
//           this.spotsTable.push([val1, val2].toString());
//           this.spotsTable.forEach(el => console.log('el==>') + el);
//           });
//           i++;
//           }
//     j++;
//     }


//   } else {    // when number of favorites jockeys equals 4

//     for (let j = 0; j <= varForMedium;) {
//           if (j == varForMedium) { varJ=2; }
//           for (let i = 0; i <= varForLess;) {
//               this.zipSpotsSubscription =
//               this.tableFavorites$.pipe(
//                 withLatestFrom(this.tableMediumProbable$.pipe(take(j - varJ))
//                 .pipe(withLatestFrom(this.tableMediumProbable$.pipe(take(j + 1))))
//                   .pipe(withLatestFrom(this.tableLessProbable$.pipe(take(i))))))
//                                 .subscribe(([val1, val2] ) => {
//                                 this.spotsTable.push([val1, val2].toString());
//                                 this.spotsTable.forEach(el => console.log('el==>') + el);
//                                 });
//               i++;
//           }
//           j++;
//     }

//   }
// }

  }

}


