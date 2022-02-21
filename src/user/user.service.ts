import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.shema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);
    user.roles.push(Role.USER);
    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }
}
