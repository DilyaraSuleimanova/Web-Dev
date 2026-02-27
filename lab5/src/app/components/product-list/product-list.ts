import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCard } from '../product-card/product-card';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  
  @Input() products: Product[] = [];

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
    }
}
