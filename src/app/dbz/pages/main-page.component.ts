import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent {

  constructor( private dbzService: DbzService){  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(Id: string):void{
    this.dbzService.deleteCharacterById(Id);

  }
  onNewCharacter(character:Character){
    this.dbzService.AddCharacter(character);
  }

}
