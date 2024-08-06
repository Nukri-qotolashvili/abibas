import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCT_ITEMS } from '../../shared/consts';
import { products } from '../../shared/interfaces';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss',
})
export class MenComponent {
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
      title: 'Gazelle Indoor Shoes',
      image:
        '../../../assets/images/products/men/shoes/Gazelle_Indoor_Shoes.jpg',
    },
    {
      title: 'Sambae Shoes',
      image: '../../../assets/images/products/men/shoes/Sambae_Shoes_White.jpg',
    },
    {
      title: 'Racer TR23 Shoes',
      image:
        '../../../assets/images/products/men/shoes/Racer_TR23_Shoes_Black.jpg',
    },
    {
      title: 'Samba Classic Shoes',
      image:
        '../../../assets/images/products/men/shoes/Samba_Classic_Shoes_White.jpg',
    },
    {
      title: 'Kaptir 3.0 Shoes',
      image: '../../../assets/images/products/men/shoes/Kaptir 3.0 Shoes.jpg',
    },
    {
      title: 'Racer TR23 Shoes',
      image: '../../../assets/images/products/men/shoes/Racer TR23 Shoes.jpg',
    },
    {
      title: 'Lite Racer 4.0 Shoes',
      image:
        '../../../assets/images/products/men/shoes/Lite Racer 4.0 Shoes.jpg',
    },
    {
      title: 'Lite Racer Adapt 7.0 Wide Shoes',
      image:
        '../../../assets/images/products/men/shoes/Lite Racer Adapt 7.0 Wide Shoes.jpg',
    },
    {
      title: 'UBounce DNA Shoes',
      image: '../../../assets/images/products/men/shoes/UBounce DNA Shoes.jpg',
    },
  ];
  clothesProducts: products[] = [
    {
      title: 'Adicolor Neuclassics Hoodie',
      image:
        '../../../assets/images/products/men/clothes/Adicolor Neuclassics Hoodie.jpg',
    },
    {
      title: 'Adicolor Oversized Crew Sweatshirt',
      image:
        '../../../assets/images/products/men/clothes/Adicolor Oversized Crew Sweatshirt.jpg',
    },
    {
      title: 'Trefoil Essentials Hoodie',
      image:
        '../../../assets/images/products/men/clothes/Trefoil Essentials Hoodie.jpg',
    },
    {
      title: 'ALL SZN Fleece Hoodie',
      image:
        '../../../assets/images/products/men/clothes/ALL SZN Fleece Hoodie.jpg',
    },
    {
      title: 'Q3 Atlanta Hooded Sweatshirt',
      image:
        '../../../assets/images/products/men/clothes/Q3 Atlanta Hooded Sweatshirt.jpg',
    },
    {
      title: 'ultimate 365',
      image: '../../../assets/images/products/men/clothes/ultimate365.jpg',
    },
  ];
}
