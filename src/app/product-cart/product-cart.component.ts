import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  products;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.cartService.listProduct();
  }

 

}