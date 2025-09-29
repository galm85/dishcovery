import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Breadcrumbs } from '../../interfaces/breadcrumbs';
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-recipe',
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {

  private recipeService = inject(RecipesService);
  private route = inject(ActivatedRoute);

  recipe:Recipe = {} as Recipe;
  displayImage:boolean = false;
  breadCrumbs:Breadcrumbs = {} as Breadcrumbs;

  toggleDisplayImage():void{
    this.displayImage = !this.displayImage;
  }

  ngOnInit(): void {
    const reciptId = this.route.snapshot.paramMap.get('recipeId');
    if(reciptId){
      const recipe = this.recipeService.getRecipeById(reciptId);
      if(recipe){
        this.recipe = {...recipe}
        this.breadCrumbs = {current:recipe.title,links:[{label:recipe.category_id,link:'/category/'+recipe.category_id}]}
      }
    }
  }
}
