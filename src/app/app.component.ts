import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public section="";
  public displayContent=false;
  public message ="";
  basicSection(){
    this.section="basic";
  }
  directiveSection(){
    this.section="directives";
  }
  confirmtoShow(){
    this.displayContent=true;
  }
  public encouraging="Congratulations you are doing fruitful work! "
}
