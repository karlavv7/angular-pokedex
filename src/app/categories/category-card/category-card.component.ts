import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input()
  pokemonType: any;

  imageUrl: String;

  ammount: number;

  constructor() {}

  ngOnInit(): void {
    console.log('PokemonType', JSON.stringify(this.pokemonType));
    this.ammount = 234232.253;
    this.imageUrl = `https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
  }
}
