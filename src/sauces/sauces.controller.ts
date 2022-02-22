import { Controller, Get } from '@nestjs/common';
import { SaucesService } from './sauces.service';

@Controller('sauces')
export class SaucesController {
  constructor(private saucesService: SaucesService) {}

  @Get()
  getAll() {
    return this.saucesService.getAllSauces();
  }
}
