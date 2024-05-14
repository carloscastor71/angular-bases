import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzModule } from '../../dbz.module';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete:  EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {name: 'Trunks',
      power: 10
    }
  ]

  onDeleteCharacter(Id?:string):void{
    if (!Id) return;
    this.onDelete.emit(Id);
  }
}
