import { Injectable } from '@angular/core';
import { productsType } from '../products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product_list: productsType = [
    {
      p_id: 1,
      p_name: 'Intel Core I7 Gen 10th',
      p_quantity: 10,
      p_price: 7000,
    },
    {
      p_id: 2,
      p_name: 'GTX 1080',
      p_quantity: 5,
      p_price: 15000
    },
    {
      p_id: 3,
      p_name: 'MSI X299 PRO',
      p_quantity: 3,
      p_price: 20010
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.product_list;
  }

  getSomeProducts (p_id: number) {
    return this.product_list[p_id];
  }

}
