import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type PizzaDocument = Pizza & Document;

@Schema()
export class Pizza {
  @Prop()
  imageUrl: string;

  @Prop()
  name: string;

  @Prop()
  types: number[];

  @Prop()
  sizes: number[];

  @Prop()
  price: number;

  @Prop()
  category: number;

  @Prop()
  rating: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Ingredients' })
  ingredients: MongooseSchema.Types.ObjectId;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
