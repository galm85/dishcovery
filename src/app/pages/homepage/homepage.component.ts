import { Component } from '@angular/core';
import { RecipesCaruselComponent } from "../../components/recipes-carusel/recipes-carusel.component";

@Component({
  selector: 'app-homepage',
  imports: [RecipesCaruselComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
