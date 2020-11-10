import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Input() name;
  @Output() closeEvent=new EventEmitter()
  public number;
  public mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.closeEvent.emit();
  }
}
