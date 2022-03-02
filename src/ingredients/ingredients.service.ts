import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredients, IngredientsDocument } from './ingredients.schema';
import { Model } from 'mongoose';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredients.name)
    private ingredientsModel: Model<IngredientsDocument>,
  ) {}

  async getAllIngredients() {
    const ingredients = await this.ingredientsModel.find().exec();
    return ingredients;
  }
}
