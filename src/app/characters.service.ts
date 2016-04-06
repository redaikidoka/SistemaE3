import {Injectable} from 'angular2/core';

@Injectable()
export class CharacterService {
  getMyCharacters = () => [
    {"name": "Goods of the Sun", "type": "solar", "caste":"dawn", "data": "goods.json"},
    {"name": "Gunnel", "type": "solar", "caste":"eclipse", "data": "gunnel.json"}
  ];
  
  getPublicCharacters = () => [
    {"name": "Ebon Carom", "type": "terrestrial", "caste":"earth", "data": "onyx.json"},
    {"name": "Goods of the Sun", "type": "solar", "caste":"dawn", "data": "goods.json"}

  ];
}