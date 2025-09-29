import { Component } from '@angular/core';
import { RecipesCaruselComponent } from "../../components/recipes-carusel/recipes-carusel.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { CategoriesCaruselComponent } from "../../components/categories-carusel/categories-carusel.component";

@Component({
  selector: 'app-homepage',
  imports: [RecipesCaruselComponent, BannerComponent, CategoriesCaruselComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
