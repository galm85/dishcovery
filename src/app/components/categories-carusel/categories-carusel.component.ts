import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';


@Component({
  selector: 'app-categories-carusel',
  imports: [],
  templateUrl: './categories-carusel.component.html',
  styleUrl: './categories-carusel.component.scss'
})
export class CategoriesCaruselComponent implements OnInit {


  private categoriesService = inject(CategoriesService);
  categories:Category[] = [];

  ngOnInit(): void {

  }
}
