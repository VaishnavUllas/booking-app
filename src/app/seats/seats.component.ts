import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  public seats;
  public name;
  public numbers;
  public isBooked=[];
  public checkedNumber=0;
  public errmsg=""
  public isValid=false;
  constructor(private router:Router) {
    this.seats=this.router.getCurrentNavigation().extras.state.noofseats;
    this.name=this.router.getCurrentNavigation().extras.state.name;
   }

  ngOnInit(): void {
    for(let i=0;i<25;i++){
      this.isBooked.push(false);
    }
  }
  onChange(index){
    if(this.isBooked[index]){
      this.checkedNumber++;
      console.log(this.checkedNumber)
    }
    else{
      this.checkedNumber--;
    }
  }
  continue(){
    if(this.checkedNumber!=this.seats){
      this.errmsg="Please select " +this.seats+" seats";
    }
    else{
      this.isValid=true;
    }
  }
  close(){
    this.isValid=false;
  }
}
