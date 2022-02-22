import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { Order, OrderSchema } from './orders.schema';
import { OrdersService } from './orders.service';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
})
export class OrdersModule {}
