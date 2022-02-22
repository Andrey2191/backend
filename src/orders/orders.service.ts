import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './orders.schema';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const order = await this.orderModel.create(createOrderDto);
    return order;
  }

  async getAllOrder() {
    const orders = await this.orderModel.find().exec();
    return orders;
  }
}
