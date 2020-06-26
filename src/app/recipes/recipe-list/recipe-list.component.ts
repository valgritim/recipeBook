import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("recette indienne","this is simply an indian recipe","https://upload.wikimedia.org/wikipedia/commons/4/46/Ajapsandali_-_Georgian_eggplant_stew.jpg"),
    new Recipe("Recette chinoise", "le Bo Bun c'est trop bon", "https://upload.wikimedia.org/wikipedia/commons/e/ec/Bo_Bun_%40_Mian_Fan_%40_Paris_%2830924431151%29.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
