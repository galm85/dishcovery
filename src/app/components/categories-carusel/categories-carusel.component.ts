import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-categories-carusel',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories-carusel.component.html',
  styleUrl: './categories-carusel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CategoriesCaruselComponent implements OnInit {


  private categoriesService = inject(CategoriesService);
  categories:Category[] = [];

  ngOnInit(): void {

    this.categories = this.categoriesService.getAllCategories();

  }
}
