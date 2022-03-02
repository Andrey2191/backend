import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type IngredientsDocument = Ingredients & Document;

@Schema()
export class Ingredients {
  @Prop()
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  price: number;
}

export const IngredientsSchema = SchemaFactory.createForClass(Ingredients);
