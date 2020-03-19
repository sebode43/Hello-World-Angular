import { Component } from '@angular/core';
//use Component class out of the angular core library

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//inside the () is a single jSON object with three keys
export class AppComponent {
  title = 'Angular 9';
  name: string = "No name yet!";
  hColor : string = "red";
  isHidden: boolean = false;
  txtValue: string = "Initial Value";
  showDiv: boolean = false;
  names: string[] = [
  "Anna", "Bill", "Chris", "Dean", "Erin"
  ];

  setTxtValue(val: string):void{
    this.txtValue = "WTE!";
  }

  setName(): void{
    this.name = "Sarah";
  }

toggleColor(): void{
  this.hColor = (this.hColor == "red")?"blue":"red";
}

flipHidden(): void{
  this.isHidden = !this.isHidden;
}



}
