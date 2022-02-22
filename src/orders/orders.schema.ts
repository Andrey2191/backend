import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  telephone: string;

  @Prop()
  email: string;

  @Prop()
  cost: number;

  @Prop()
  pizzas: object[];

  @Prop()
  sauces: object[];

  @Prop()
  totalCount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
