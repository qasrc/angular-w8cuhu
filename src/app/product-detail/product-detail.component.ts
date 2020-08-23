import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private router: ActivatedRoute,
    private ceartService: CartService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(param => {
      this.product = products[param.get('productId')]
    })
  }

  addToCart(product){
    this.ceartService.addProductToCart(product);
    window.alert('Add product to cart');
  }

}