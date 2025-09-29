import { Injectable, signal } from '@angular/core';
import { Category } from '../interfaces/category';

const tempCategories:Category[] = [
  {
    "id": "breakfast",
    "title": "Breakfast",
    "image": "https://i.cbc.ca/1.7428441.1736538341!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/1384617341.jpg?im="
  },
  {
    "id": "lunch",
    "title": "Lunch",
    "image": "https://i.cbc.ca/1.7428441.1736538341!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/1384617341.jpg?im="
  },
  {
    "id": "dinner",
    "title": "Dinner",
    "image": "https://i.cbc.ca/1.7428441.1736538341!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/1384617341.jpg?im="
  },
  {
    "id": "desserts",
    "title": "Desserts",
    "image": "https://i.cbc.ca/1.7428441.1736538341!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/1384617341.jpg?im="
  },
  {
    "id": "quickmeals",
    "title": "Quick Meals",
    "image": "https://i.cbc.ca/1.7428441.1736538341!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/1384617341.jpg?im="
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
