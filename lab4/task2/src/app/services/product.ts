import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=710000000',
      likes: 40,
      categoryId: 1,
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
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=710000000',
      likes: 0,
      categoryId: 1,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=710000000',
      likes: 0,
      categoryId: 1,
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
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=710000000',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 5,
      name: ' Redmi A5',
      description: 'Xiaomi Redmi A5 is a powerful and stylish smartphone with impressive features and a large amount of memory for comfortable use.',
      price: 49990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p58/49873129.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p5b/49873131.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=710000000',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 6,
      name: 'MacBook Air 13',
      description: 'Remarkably light and less than half an inch thin, MacBook Air fits easily into your on-the-go lifestyle — and your bag.',
      price: 439749,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=710000000',
      likes: 1000,
      categoryId: 2,
    },

    {
      id: 7,
      name: 'Lenovo IdeaPad 3',
      description: 'The Lenovo IdeaPad 3 is a versatile and budget-friendly laptop offering multiple processor, memory, and display options, designed for everyday computing and productivity.',
      price: 171440,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=710000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 8,
      name: 'Acer Aspire 3',
      description: 'The Acer Aspire 3 is a series of laptops with various configurations suitable for work, study, and multimedia, featuring 15.6-17.3" screens and Intel or AMD processors.',
      price: 169096,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=710000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 9,
      name: 'ThundeRobot 911 X Wild Hunter G2 Pro',
      description: 'ThundeRobot 911 X Wild Hunter G2 Pro is a powerful gaming laptop that combines high performance and modern technologies.',
      price: 670990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/86274830270494.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=710000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 10,
      name: 'PRYME N5095',
      description: 'The PRYME N5095 laptop is the perfect solution for studying and working',
      price: 189990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pfa/45122464.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=710000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 11,
      name: 'Яндекс Бейсик с Алисой',
      description: 'The 140 cm LED TV with 4K UHD resolution provides high-quality images and surround sound with Dolby Audio.',
      price: 238697,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p12/25408606.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p12/25408606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/p12/25408608.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p12/25408609.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-beisik-s-alisoi-yndx-00076-140-sm-chernyi-133033164/?c=710000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 12,
      name: 'SMART',
      description: 'SMART TV 45G7000 127 cm Black',
      price: 101900,
      rating: 3.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h5e/84455776616478.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h5e/84455776616478.jpg?format=gallery-medium'
      ],
      link: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h5e/84455776616478.jpg?format=gallery-medium',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 13,
      name: 'LG',
      description: 'The LG 55UT80006LA LED TV combines a stylish minimalist design with high-quality image performance for an immersive viewing experience.',
      price: 298560,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h7b/86276597415966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h7b/86276597415966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h7b/86276597415966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h7b/86276597415966.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-55ut80006la-140-sm-chernyi-120393130/?c=710000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 14,
      name: 'Toshiba',
      description: 'REGZA Engine High Grade optimizes image quality far beyond the capabilities of Full HD, regardless of the content you are watching.',
      price: 76990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe2/p87/63421649.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p87/63421649.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p69/64859206.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p69/64859205.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/toshiba-32v35re-ru-81-sm-chernyi-145378445/?c=710000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 15,
      name: 'Xiaomi A Pro 2025',
      description: 'Xiaomi A Pro 2025 series TVs, equipped with advanced quantum dot display technology, bring colors to life.',
      price: 188425,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/pdc/34107374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/pdc/34107374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pff/pdb/34107378.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5a/pd9/34107381.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-a-pro-2025-l43ma-sru-109-sm-chernyi-120328539/?c=710000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 16,
      name: 'Apple AirPods 4',
      description: 'The updated Apple AirPods 4 wireless headphones with personalized spatial audio and adaptive equalizer make music an integral part of your life.',
      price: 60057,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=710000000',
      likes: 0,
      categoryId: 4,
    },

    {
      id: 17,
      name: 'Remax PD-BT101',
      description: 'The Remax PD-BT101 headphones are the perfect choice for anyone who values comfort and sound quality anywhere.',
      price: 1532,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p73/p2a/32211847.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p2a/32211847.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2d/32211848.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p31/32211849.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-remax-pd-bt101-belyi-136902528/?c=710000000',
      likes: 96,
      categoryId: 4,
    },

    {
      id: 18,
      name: 'Apple EarPods USB-C',
      description: 'The Apple USB-C MYQY3ZM/A headphones are a convenient and practical solution for those who prefer a classic design and reliable sound quality.',
      price: 9233,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h55/hd8/84353546846238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/ha9/84353546911774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=710000000',
      likes: 0,
      categoryId: 4,
    },

    {
      id: 19,
      name: 'Xiaomi Redmi Buds 6 Play',
      description: '5 preset modes (standard, bass boost, voice boost, treble boost, and volume boost) via the Xiaomi Earbuds app.',
      price: 4889,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p7d/107072746.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p7d/107072746.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p7d/107072749.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc8/p7a/107072750.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-play-chernyi-123229678/?c=710000000',
      likes: 0,
      categoryId: 4,
    },

    {
      id: 20,
      name: 'Huawei FreeClip',
      description: 'The TWS HUAWEI FreeClip headphones with clip-on design are suitable for sports and an active lifestyle.',
      price: 73239,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h3e/85254957596702.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h3e/85254957596702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/hdb/85254957727774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h03/85254957793310.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-huawei-freeclip-chernyi-116760063/?c=710000000',
      likes: 0,
      categoryId: 4,
    },

  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
