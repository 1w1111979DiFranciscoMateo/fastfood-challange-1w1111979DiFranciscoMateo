import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  order : Order = {
    number : Math.floor(Math.random() * 1000) + 1,
    name : "",
    description : "",
    date : new Date(),
    isCooking : true
  };

  private orderService = inject(OrderService);

  save(form : NgForm){
    if(form.invalid){
      alert("Formulario Invalido");
      console.log(form.value);
      return;
    }
    this.orderService.add(form.value);
    form.reset();
  }
}
