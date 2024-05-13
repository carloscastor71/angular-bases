import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app en Angular';
  public counter: number = 10;


  increasyBy( value: number ):void{

    this.counter += value;
  }
  reset():void{
    this.counter = 10;
  }
}
