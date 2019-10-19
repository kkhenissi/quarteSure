import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit,AfterViewChecked {
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges;
    this.tableFavorites$ = of(this.tableFavorites);
    
  }
  @Input() tableFavorites
  tableFavorites$: Observable<number[]>;
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
   
  }

}
