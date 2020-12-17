import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  nval: string;
  calMethodSelector: string;
  calMethods: string[] = ['isPrime', 'isFibonacci'];
  checker: boolean = false;

  constructor() { }

  isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  isPerfectSquare(n) {
      return n > 0 && Math.sqrt(n) % 1 === 0;
  };


  isFibonacci(numberToCheck){
      return this.isPerfectSquare(5*numberToCheck*numberToCheck + 4) ||
          this.isPerfectSquare(5*numberToCheck*numberToCheck - 4);
  }

  ngOnInit(): void {
  }

  onBlurNumber(e){
    if(e.target.value){
      this.nval = Math.round(e.target.value).toString();
    }
    this.validation();
  }

  validation(){
    if(this.calMethodSelector){
      if(this.calMethodSelector === 'isPrime'){
        this.checker = this.isPrime(this.nval);
      }
      else if(this.calMethodSelector === 'isFibonacci'){
        this.checker = this.isFibonacci(this.nval);
      }
    }
  }

  onChangeCalMethod(){
    this.validation();
  }
}
