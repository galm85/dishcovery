import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {

  private recipeService = inject(RecipesService);
  private route = inject(ActivatedRoute);

  recipe:Recipe = {} as Recipe;
  displayImage:boolean = false;

  toggleDisplayImage():void{
    this.displayImage = !this.displayImage;
  }

  ngOnInit(): void {
    const reciptId = this.route.snapshot.paramMap.get('recipeId');
    if(reciptId){
      const recipe = this.recipeService.getRecipeById(reciptId);
      if(recipe){
        this.recipe = {...recipe}
      }
    }
  }
}
