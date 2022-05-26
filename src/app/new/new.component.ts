import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public name ="User";
  public itsId = "textId";
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "text-danger": this.hasError,
    "text-success": !this.hasError,
    "text-special": this.isSpecial
  };
  public highlightColor="orange";
  public titleStyle={
    color:"purple",
    fontStyle:"italic"
  };
  public greeting1=null;
  public greeting2=null;
  public greeting3=null;
  public twoValue="";
  //Component interaction
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Yeah eureka!"
  }

  onClick(){
    this.greeting1="Welcome to event binding content";
    setTimeout(()=>{
      this.greeting1=null;
    },2000);
  }

  forClickInfo(event){
    this.greeting2="See the console to know the event information";
    console.log(event)
    setTimeout(()=>{
      this.greeting2=null;
    },2000);
  }

  logMessage(input){
    console.log(input);
  }

  fireEvent(){
    this.childEvent.emit('Thanks for your visit! CLick Home button below to go back');
    setTimeout(()=>{
      this.childEvent.emit('');
    },3000);
  }

}
