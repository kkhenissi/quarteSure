import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { JokeyComponent } from './components/jokey/jockey.component';
import { LessProbableComponent } from './components/less-probable/less-probable.component';
import { MediumProbableComponent } from './components/medium-probable/medium-probable.component';
import { NextCourseComponent } from './components/next-course/next-course.component';
import { BasicTableComponent } from './components/table-responsive/table-responsive.component';
import { NextCoursesEffects } from './ngrx/next-courses.effects';
import { nextCoursesReducer } from './ngrx/next-courses.reducers';
import { ParticipantsEffects } from './ngrx/participant.effects';
import { participantReducer } from './ngrx/participant.reducers';
import { IaComponent } from './components/ia/ia.component';
// import { CottedDirective } from './directives/cotted.directive';
// import { ParticipantsEffects } from './ngrx/product.effects';





@NgModule({
  declarations: [
    AppComponent,
    JokeyComponent,
    BasicTableComponent,

    LessProbableComponent,
    FavoriteComponent,
    MediumProbableComponent,
    NextCourseComponent,
    IaComponent,
 //  CottedDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot({participantsState: participantReducer, nextCoursesState: nextCoursesReducer}),
    EffectsModule.forRoot([ParticipantsEffects, NextCoursesEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
