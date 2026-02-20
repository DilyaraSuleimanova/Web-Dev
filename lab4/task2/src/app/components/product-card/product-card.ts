import { Component, Input } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  currentImageIndex = 0;

  
  // nextImage() {
  //   this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  // }

  // prevImage() {
  //   this.currentImageIndex =
  //     (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  // }

  openProduct() {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
