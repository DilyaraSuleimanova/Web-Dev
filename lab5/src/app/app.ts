import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductService } from './services/product';
import { Category } from './model/category.model';
import { Product } from './model/product.model';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task2');

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectedCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }
}
