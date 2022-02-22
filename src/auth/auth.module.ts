import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('PRIVATE_KEY'),
          signOptions: {
            expiresIn: '24h',
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
