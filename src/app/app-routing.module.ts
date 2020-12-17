import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';


const routes: Routes = [
  { path: 'q1', component: Question1Component },
  { path: 'q2', component: Question2Component },
  { path: '', redirectTo: '/app' , pathMatch: 'full'},
  { path: 'app', component: HeaderComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
