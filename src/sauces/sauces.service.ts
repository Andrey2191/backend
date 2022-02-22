import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sauce, SauceDocument } from './sauces.schema';
import { Model } from 'mongoose';

@Injectable()
export class SaucesService {
  constructor(
    @InjectModel(Sauce.name) private sauceModel: Model<SauceDocument>,
  ) {}

  async getAllSauces() {
    const sauces = await this.sauceModel.find().exec();
    return sauces;
  }
}
