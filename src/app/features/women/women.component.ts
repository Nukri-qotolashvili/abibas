import { Component } from '@angular/core';
import { PRODUCT_ITEMS } from '../../shared/consts';
import { products } from '../../shared/interfaces';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [],
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss',
})
export class WomenComponent {
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
      title: 'Gazelle Bold Shoes',
      image:
        '../../../assets/images/products/women/shoes/Gazelle Bold Shoes.jpg',
    },
    {
      title: 'Sambae Shoes',
      image: '../../../assets/images/products/women/shoes/Sambae Shoes.jpg',
    },
    {
      title: 'Gazelle Shoes',
      image: '../../../assets/images/products/women/shoes/Gazelle Shoes.jpg',
    },
    {
      title: 'Campus 00s Shoes',
      image: '../../../assets/images/products/women/shoes/Campus 00s Shoes.jpg',
    },
    {
      title: 'UBounce DNA Shoes',
      image:
        '../../../assets/images/products/women/shoes/UBounce DNA Shoes.jpg',
    },
  ];
  clothesProducts: products[] = [
    {
      title: 'Adicolor Neuclassics Tee',
      image:
        '../../../assets/images/products/women/clothes/Adicolor Neuclassics Tee.jpg',
    },
    {
      title: 'adidas x FARM Rio Graphic Tee',
      image:
        '../../../assets/images/products/women/clothes/Adicolor Neuclassics Tee.jpg',
    },
    {
      title: '3-Stripes Tee',
      image: '../../../assets/images/products/women/clothes/3-Stripes Tee.jpg',
    },
    {
      title: 'ALL SZN Loose Tee',
      image:
        '../../../assets/images/products/women/clothes/ALL SZN Loose Tee.jpg',
    },
    {
      title: 'Essentials Boyfriend Tee',
      image:
        '../../../assets/images/products/women/clothes/Essentials Boyfriend Tee.jpg',
    },
    {
      title: 'Own The Run Tee',
      image:
        '../../../assets/images/products/women/clothes/Own The Run Tee.jpg',
    },
  ];
}
