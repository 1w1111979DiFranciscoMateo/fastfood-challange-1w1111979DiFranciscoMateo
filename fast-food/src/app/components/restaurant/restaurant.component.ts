import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{
  orders : Order[] = [];
  
  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.cargarArray();
  }

  cargarArray(){
    this.orders = this.orderService.getAll();
  }

}
