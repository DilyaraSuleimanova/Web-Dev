import { Component, input, output } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  deleteProduct() {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      this.delete.emit(this.product().id);
    }
  }

  currentImageIndex = 0;

  openProduct() {
    window.open(this.product().link, '_blank');
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  
}
