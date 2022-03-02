import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from 'src/user/user.shema';
import { UserModule } from 'src/user/user.module';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Console } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private userSirvice: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userSirvice.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userSirvice.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, roles: user.roles };
    console.log(payload);
    return {
      ...payload,
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userSirvice.getUserByEmail(userDto.email);
    console.log({ userDto });
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    console.log(user, userDto);

    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'incorrect email or password' });
  }
}
