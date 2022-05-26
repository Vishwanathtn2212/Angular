import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  public directives=["ngIf","ngSwitch","ngFor"];
  @Input('parentData') public encorContent;
  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
  }

  select(output){
    console.log(output)
  }

  fireEvent(){
    this.childEvent.emit('Thank for your visit! Click Home button below to go back')
    setTimeout(()=>{
      this.childEvent.emit('');
    },3000);
  }

}
