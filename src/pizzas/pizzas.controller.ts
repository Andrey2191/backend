import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PizzasService } from './pizzas.service';

@Controller('pizzas')
export class PizzasController {
  constructor(private pizzaService: PizzasService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.pizzaService.getAllPizzas();
  }
}
