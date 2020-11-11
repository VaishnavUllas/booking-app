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
  public selecetedSeats=[];
  public data;
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
      this.selecetedSeats.push(index);
      console.log(this.selecetedSeats)
    }
    else{
      this.checkedNumber--;
      let x=this.selecetedSeats.indexOf(index);
      this.selecetedSeats.splice(x,1);
    }
  }
  continue(){
    if(this.checkedNumber!=this.seats){
      this.errmsg="Please select " +this.seats+" seats";
    }
    else{
      this.data={
        "seats":this.selecetedSeats,
        "name":this.name
      }
      console.log(this.data);
      this.isValid=true;
    }
  }
  close(){
    this.isValid=false;
  }
}
