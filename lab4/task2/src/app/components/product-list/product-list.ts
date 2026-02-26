import { Component } from '@angular/core';
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
  
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=710000000'
    },

    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 is a smartphone that combines an excellent camera, a flagship screen, a bright, productive and high-speed processor.',
      price: 390000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h09/86009485459486.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h80/86009485557790.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=710000000'
    },

    {
      id: 3,
      name: 'iPhone 17 Pro',
      description: 'The Apple iPhone 17 Pro 256Gb Dual eSIM is the epitome of innovation and uncompromising quality in the smartphone world.',
      price: 774000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=710000000'
    },

    {
      id: 4,
      name: 'Xiaomi Redmi Note 14',
      description: 'Xiaomi Redmi Note 14 is a powerful and stylish smartphone with impressive features and a large amount of memory for comfortable use.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p79/20744916.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p79/20744915.JPG?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=710000000'
    },

    {
      id: 5,
      name: 'iPhone 15',
      description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=710000000'
    },

    {
      id: 6,
      name: 'iPhone 17 Pro',
      description: 'The Apple iPhone 17 Pro 256Gb Dual eSIM is the epitome of innovation and uncompromising quality in the smartphone world.',
      price: 774000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=710000000'
    },

    {
      id: 7,
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 is a smartphone that combines an excellent camera, a flagship screen, a bright, productive and high-speed processor.',
      price: 390000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h09/86009485459486.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h80/86009485557790.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=710000000'
    },

    {
      id: 8,
      name: 'Xiaomi Redmi Note 14',
      description: 'Xiaomi Redmi Note 14 is a powerful and stylish smartphone with impressive features and a large amount of memory for comfortable use.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p79/20744916.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p79/20744915.JPG?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=710000000'
    },

    {
      id: 9,
      name: 'iPhone 17 Pro',
      description: 'The Apple iPhone 17 Pro 256Gb Dual eSIM is the epitome of innovation and uncompromising quality in the smartphone world.',
      price: 774000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=710000000'
    },

    {
      id: 10,
      name: 'iPhone 15',
      description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=710000000'
    },

    {
      id: 11,
      name: 'Xiaomi Redmi Note 14',
      description: 'Xiaomi Redmi Note 14 is a powerful and stylish smartphone with impressive features and a large amount of memory for comfortable use.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p79/20744916.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p79/20744915.JPG?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=710000000'
    },

    {
      id: 12,
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 is a smartphone that combines an excellent camera, a flagship screen, a bright, productive and high-speed processor.',
      price: 390000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hcd/86009485426718.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h09/86009485459486.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h80/86009485557790.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=710000000'
    },
  ];
}