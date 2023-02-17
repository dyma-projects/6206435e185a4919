import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public color: string = 'green';
  public content: string = 'Je suis un contenu';
  public changeColor():void{
      if (this.color === 'green'){
        this.color='blue'
      }else{
        this.color='green'
      }
  }
}
