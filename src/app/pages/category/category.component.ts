import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { Breadcrumbs } from '../../interfaces/breadcrumbs';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

    private recipeService = inject(RecipesService);
    private categoryService = inject(CategoriesService);
    private route = inject(ActivatedRoute);

    recipes:Recipe[] = [];
    category:Category | undefined = undefined;
    breadcrumbs:Breadcrumbs = {} as Breadcrumbs;

    ngOnInit(): void {
        const categoryId = this.route.snapshot.paramMap.get('categoryId');
        if(categoryId){
          const category = this.categoryService.getCategoryById(categoryId);
          if(category && category !== undefined){
            this.category = category;
            this.recipes = this.recipeService.getRecipesByCategory(categoryId);
            this.breadcrumbs = {current:category.title,links:[]}
          }



        }
    }

}
