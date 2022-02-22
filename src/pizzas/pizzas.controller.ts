import { Controller, Get } from '@nestjs/common';
import { PizzasService } from './pizzas.service';

@Controller('pizzas')
export class PizzasController {
  constructor(private pizzaService: PizzasService) {}

  @Get()
  getAll() {
    return this.pizzaService.getAllPizzas();
  }
}
