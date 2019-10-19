import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JokeyComponent } from './components/jokey/jockey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicTableComponent } from './components/table-responsive/table-responsive.component';
import { DatatablesComponent } from './components/datatables-component/datatables.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LessProbableComponent } from './components/less-probable/less-probable.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { MediumProbableComponent } from './components/medium-probable/medium-probable.component';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    JokeyComponent,
    BasicTableComponent,
    DatatablesComponent,
    LessProbableComponent,
    FavoriteComponent,
    MediumProbableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
