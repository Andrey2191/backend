import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type IngredientsDocument = Ingredients & Document;

@Schema()
export class Ingredients {
  _id: string;
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  price: number;
}

export const IngredientsSchema = SchemaFactory.createForClass(Ingredients);
