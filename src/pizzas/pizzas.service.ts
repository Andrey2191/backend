import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pizza, PizzaDocument } from './pizzas.schema';
import { Model } from 'mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class PizzasService {
  constructor(
    @InjectModel(Pizza.name) private pizzaModel: Model<PizzaDocument>,
  ) {}

  async getAllPizzas() {
    const pizzas = await this.pizzaModel
      .findOne({ _id: '6228aa60a876ba92ad24d29f' })
      .populate('ingredients');
    return pizzas;
  }
}

// поменять id для ингредиентов и пицц
