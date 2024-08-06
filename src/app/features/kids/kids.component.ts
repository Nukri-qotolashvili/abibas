import { Component } from '@angular/core';
import { PRODUCT_ITEMS } from '../../shared/consts';
import { products } from '../../shared/interfaces';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss',
})
export class KidsComponent {
  readonly ultraboost = PRODUCT_ITEMS;
  choes = '';
  shoes() {
    this.choes = 'shoes';
  }
  clothes() {
    this.choes = 'clothes';
  }

  shoesProducts: products[] = [
    {
      title: 'Gazelle Shoes Kids',
      image:
        '../../../assets/images/products/kids/shoes/Gazelle Shoes Kids.jpg',
    },
    {
      title: 'Ultrarun 5 Shoes Kids',
      image:
        '../../../assets/images/products/kids/shoes/Ultrarun 5 Shoes Kids.jpg',
    },
    {
      title: 'Ultrarun 5 Shoes Kids black',
      image:
        '../../../assets/images/products/kids/shoes/Ultrarun 5 Shoes Kids-black.jpg',
    },
    {
      title: 'Racer TR23 Shoes Kids',
      image:
        '../../../assets/images/products/kids/shoes/Racer TR23 Shoes Kids.jpg',
    },
    {
      title: 'Handball Spezial Shoes Kids',
      image:
        '../../../assets/images/products/kids/shoes/Handball Spezial Shoes Kids.jpg',
    },
    {
      title: 'SL 72 RS Shoes Kids',
      image:
        '../../../assets/images/products/kids/shoes/SL 72 RS Shoes Kids.jpg',
    },
  ];
  clothesProducts: products[] = [
    {
      title: 'adidas Short Sleeve France Camo Logo Tee',
      image:
        '../../../assets/images/products/kids/clothes/adidas Short Sleeve France Camo Logo Tee.jpg',
    },
    {
      title: '2024 Inter Miami CF adidas Archive Youth Messi Jersey',
      image:
        '../../../assets/images/products/kids/clothes/2024 Inter Miami CF adidas Archive Youth Messi Jersey.jpg',
    },
    {
      title: 'Tee Kids',
      image: '../../../assets/images/products/kids/clothes/Tee Kids.jpg',
    },
    {
      title: 'SS SPACE LIFE TEE',
      image:
        '../../../assets/images/products/kids/clothes/SS SPACE LIFE TEE.jpg',
    },
  ];
}
