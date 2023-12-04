import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {
  characters: any[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}