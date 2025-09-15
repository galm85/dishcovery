import { Component } from '@angular/core';
import { RecipesCaruselComponent } from "../../components/recipes-carusel/recipes-carusel.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-homepage',
  imports: [RecipesCaruselComponent, BannerComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
