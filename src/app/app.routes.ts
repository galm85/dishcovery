import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

export const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'recipe/:recipeId',component:RecipeComponent}



];
