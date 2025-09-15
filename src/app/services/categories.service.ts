import { Injectable, signal } from '@angular/core';
import { Category } from '../interfaces/category';

const tempCategories:Category[] = [
  {
    "id": "breakfast",
    "title": "Breakfast",
    "image": ""
  },
  {
    "id": "lunch",
    "title": "Lunch",
    "image": ""
  },
  {
    "id": "dinner",
    "title": "Dinner",
    "image": ""
  },
  {
    "id": "desserts",
    "title": "Desserts",
    "image": ""
  },
  {
    "id": "quickmeals",
    "title": "Quick Meals",
    "image": ""
  }
]

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  private categories = signal<Category[]>([...tempCategories]);

  getAllCategories():Category[]{
    return this.categories();
  }
}
