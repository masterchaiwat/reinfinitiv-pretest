import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { HeaderComponent } from './header/header.component';
import { OnlyNumber } from './question1/number.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    Question1Component,
    Question2Component,
    HeaderComponent,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
