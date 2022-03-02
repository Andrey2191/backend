import { Controller, Get } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientService: IngredientsService) {}

  @Get()
  getAll() {
    return this.ingredientService.getAllIngredients();
  }
}
