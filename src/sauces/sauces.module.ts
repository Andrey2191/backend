import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaucesController } from './sauces.controller';
import { Sauce, SaucesSchema } from './sauces.schema';
import { SaucesService } from './sauces.service';

@Module({
  providers: [SaucesService],
  controllers: [SaucesController],
  imports: [
    MongooseModule.forFeature([{ name: Sauce.name, schema: SaucesSchema }]),
  ],
})
export class SaucesModule {}
