import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzasController } from './pizzas.controller';
import { Pizza, PizzaSchema } from './pizzas.schema';
import { PizzasService } from './pizzas.service';

@Module({
  providers: [PizzasService],
  controllers: [PizzasController],
  imports: [
    MongooseModule.forFeature([{ name: Pizza.name, schema: PizzaSchema }]),
  ],
})
export class PizzasModule {}
