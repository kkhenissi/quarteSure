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
import { BasicTableComponent } from './components/table-responsive/table-responsive.component';
import { ParticipantsEffects } from './ngrx/participant.effects';
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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ParticipantsEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
