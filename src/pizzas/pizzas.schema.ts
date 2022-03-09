import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import * as mongoose from 'mongoose';
import { Ingredients } from 'src/ingredients/ingredients.schema';

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

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' }],
  })
  ingredients: Ingredients[];
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
