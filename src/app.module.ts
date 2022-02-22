import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PizzasService } from './pizzas/pizzas.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { SaucesService } from './sauces/sauces.service';
import { SaucesModule } from './sauces/sauces.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    UserModule,
    MongooseModule.forRoot(process.env.DB_URL),
    AuthModule,
    PizzasModule,
    SaucesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
