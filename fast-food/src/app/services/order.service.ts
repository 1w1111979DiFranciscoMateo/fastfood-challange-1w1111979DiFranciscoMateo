import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //creo un array de ordenes vacio
  private orders : Order[] = [];

  add(order : Order){
    this.orders.push(order);
  }

  getAll(){
    return[
      ...this.orders
    ];
  }
}
