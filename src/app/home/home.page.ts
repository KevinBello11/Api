import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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