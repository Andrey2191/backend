import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  create(@Body() orderDto: CreateOrderDto) {
    return this.orderService.createOrder(orderDto);
  }

  @Get()
  getAll() {
    return this.orderService.getAllOrder();
  }
}
