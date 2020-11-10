import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welocome-page',
  templateUrl: './welocome-page.component.html',
  styleUrls: ['./welocome-page.component.css']
})
export class WelocomePageComponent implements OnInit {
  public nameText;
  public noOfSeats;
  public errmsg="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  validate(){
    if(this.nameText!=undefined&&this.noOfSeats!=undefined){
      this.router.navigate(['seats'],{state:{'name':this.nameText,'noofseats':this.noOfSeats}});
    }
    else{
      this.errmsg="Please input name and seats";
    }
  }
}
