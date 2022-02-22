import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SauceDocument = Sauce & Document;

@Schema()
export class Sauce {
  @Prop()
  imageUrl: string;

  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const SaucesSchema = SchemaFactory.createForClass(Sauce);
