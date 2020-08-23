import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

 public addProductToCart(product){
    this.items.push(product);
  }

  clearCart(){
    this.items = [];
  }

  listProduct(){
    return this.items;
  }

  getShipingPrice(){
    return this.http.get('/assets/shipping.json');
  }
}