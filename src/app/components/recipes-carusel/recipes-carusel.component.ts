import { Component, inject, Input, signal,OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { RouterLink } from "@angular/router";

register();

@Component({
  selector: 'app-recipes-carusel',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipes-carusel.component.html',
  styleUrl: './recipes-carusel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecipesCaruselComponent implements OnInit {

  @Input() title:string = '';
  @Input() category:string = '';
  private recipesService = inject(RecipesService);
  recipes:Recipe[] = [];

  ngOnInit(): void {

    this.recipes = this.recipesService.getRecipesByCategory(this.category);
  }
}
