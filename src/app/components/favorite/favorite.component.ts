import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent implements OnInit,AfterViewChecked {

  nbrFavorite: number[];
  @Input() tableFavorites=[];
  tableFavorites$: Observable<number[]>;
  constructor(private cdRef:ChangeDetectorRef) { }


  ngOnInit() {

  }
  ngAfterViewChecked(): void {
    this.nbrFavorite=[];

    this.tableFavorites$ = of(this.tableFavorites);
    // this.tableFavorites.forEach(element => {
    //   this.nbrFavorite.push(this.tableFavorites.indexOf(element)+1);
    //   console.log('22222222222222222222222222222222>>',this.nbrFavorite);
    // });
  }

}
