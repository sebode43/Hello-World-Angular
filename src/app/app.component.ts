import { Component } from '@angular/core';
//use Component class out of the angular core library

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//inside the () is a singl jSON object with three keys
export class AppComponent {
  title = 'Angular 9';
  name: string = "No name yet!";
  hColor : string = "red";
  isHidden: boolean = false;

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
