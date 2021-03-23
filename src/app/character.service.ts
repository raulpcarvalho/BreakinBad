import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { CHARACTERS } from './mock-characters';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService: MessageService) { }

  getCharacters(): Observable<Character[]> {
    const characters = of(CHARACTERS);
    this.messageService.add('CharacterService: fetched characters');
    return characters;
  }

  getCharacter(id: number): Observable<Character> {
    const character = CHARACTERS.find(c => c.id === id) as Character;
    this.messageService.add(`CharacterService: fetched character id=${id}`);
    return of(CHARACTERS.find(character => character.id === id));
  }

}
